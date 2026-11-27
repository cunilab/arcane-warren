'use client';

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';

type View = { scale: number; x: number; y: number };

const minScale = 1;
const maxScale = 4;

function clampScale(scale: number) {
  return Math.min(maxScale, Math.max(minScale, scale));
}

function imageContentRect(img: HTMLImageElement) {
  const box = img.getBoundingClientRect();
  const ratio = (img.naturalWidth || img.width) / (img.naturalHeight || img.height);
  if (!ratio || !box.width || !box.height) return box;
  if (box.width / box.height > ratio) {
    const width = box.height * ratio;
    const left = box.left + (box.width - width) / 2;
    return { left, right: left + width, top: box.top, bottom: box.bottom };
  }
  const height = box.width / ratio;
  const top = box.top + (box.height - height) / 2;
  return { left: box.left, right: box.right, top, bottom: top + height };
}

export function ZoomableImage({
  src, alt, width, height, caption, priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
}) {
  const opener = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ dist: number; scale: number } | null>(null);
  const drag = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const moved = useRef(false);
  const scaleRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });
  const locked = useRef(false);
  const [view, setView] = useState<View>({ scale: 1, x: 0, y: 0 });
  const [panning, setPanning] = useState(false);

  function apply(scale: number, x: number, y: number) {
    const next = clampScale(scale);
    const pan = next <= minScale ? { x: 0, y: 0 } : { x, y };
    scaleRef.current = next;
    panRef.current = pan;
    setView({ scale: next, x: pan.x, y: pan.y });
  }

  function lock() {
    if (locked.current) return;
    locked.current = true;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function unlock() {
    if (!locked.current) return;
    locked.current = false;
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    opener.current?.focus();
  }

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    const onClose = () => unlock();
    const onWheel = (event: WheelEvent) => {
      if (!node.open) return;
      event.preventDefault();
      const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
      apply(scaleRef.current * factor, panRef.current.x, panRef.current.y);
    };
    node.addEventListener('close', onClose);
    node.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      node.removeEventListener('close', onClose);
      node.removeEventListener('wheel', onWheel);
      if (node.open) node.close();
      unlock();
    };
  }, []);

  function open() {
    const node = dialog.current;
    if (!node || node.open) return;
    apply(1, 0, 0);
    node.showModal();
    lock();
  }

  function step(direction: 1 | -1) {
    const snapped = Math.round(scaleRef.current * 2) / 2 + direction * 0.5;
    apply(snapped, panRef.current.x, panRef.current.y);
  }

  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    moved.current = false;
    if (pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { dist: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)), scale: scaleRef.current };
      drag.current = null;
      setPanning(false);
      return;
    }
    if (scaleRef.current > minScale) {
      drag.current = { x: event.clientX, y: event.clientY, panX: panRef.current.x, panY: panRef.current.y };
      setPanning(true);
    }
  }

  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!pointers.current.has(event.pointerId)) return;
    const previous = pointers.current.get(event.pointerId)!;
    if (Math.hypot(event.clientX - previous.x, event.clientY - previous.y) > 3) moved.current = true;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size >= 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      apply(pinch.current.scale * (dist / pinch.current.dist), panRef.current.x, panRef.current.y);
      return;
    }
    if (drag.current && scaleRef.current > minScale) {
      apply(scaleRef.current, drag.current.panX + event.clientX - drag.current.x, drag.current.panY + event.clientY - drag.current.y);
    }
  }

  function pointerEnd(event: PointerEvent<HTMLDivElement>) {
    pointers.current.delete(event.pointerId);
    pinch.current = null;
    drag.current = null;
    setPanning(false);
    if (pointers.current.size === 1 && scaleRef.current > minScale) {
      const [left] = [...pointers.current.values()];
      drag.current = { x: left.x, y: left.y, panX: panRef.current.x, panY: panRef.current.y };
      setPanning(true);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (scaleRef.current <= minScale) return;
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [48, 0], ArrowRight: [-48, 0], ArrowUp: [0, 48], ArrowDown: [0, -48],
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    apply(scaleRef.current, panRef.current.x + move[0], panRef.current.y + move[1]);
  }

  return (
    <>
      <button ref={opener} type="button" className="warren-zoom-open" aria-label={`Open larger view: ${alt}`} onClick={open}>
        <img src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />
        <span className="warren-zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <circle cx="10" cy="10" r="6.25" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M15 15.5 20 20.5M10 7.5v5M7.5 10h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <dialog
        ref={dialog}
        className="warren-zoom"
        aria-label={alt}
        onKeyDown={onKeyDown}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      >
        <button type="button" className="warren-zoom-close" aria-label="Close" onClick={() => dialog.current?.close()}>×</button>
        <div
          className="warren-zoom-stage"
          data-zoomed={view.scale > minScale ? 'true' : 'false'}
          data-panning={panning ? 'true' : 'false'}
          onPointerDown={pointerDown}
          onPointerMove={pointerMove}
          onPointerUp={pointerEnd}
          onPointerCancel={pointerEnd}
          onClick={(event) => {
            if (moved.current) { moved.current = false; return; }
            const img = event.currentTarget.querySelector('img');
            if (!img) return;
            const rect = imageContentRect(img);
            const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
            if (outside) dialog.current?.close();
          }}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            draggable={false}
            style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
          />
        </div>
        {caption ? <p className="warren-zoom-caption">{caption}</p> : null}
        <div className="warren-zoom-controls">
          <button type="button" aria-label="Zoom out" disabled={view.scale <= minScale} onClick={() => step(-1)}>−</button>
          <button type="button" aria-label="Reset zoom" onClick={() => apply(1, 0, 0)}>Reset</button>
          <button type="button" aria-label="Zoom in" disabled={view.scale >= maxScale} onClick={() => step(1)}>+</button>
        </div>
      </dialog>
    </>
  );
}
