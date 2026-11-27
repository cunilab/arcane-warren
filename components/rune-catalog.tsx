'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type RuneGroup = {
  id: string;
  name: string;
  discipline: string;
  barWidth: string;
  runes: {
    id: string;
    name: string;
    description: string;
    purpose: string;
    version: string;
    status: string;
    input: string;
    output: string;
    evaluation: string;
    toolPolicy: string;
  }[];
};

export function RuneCatalogView({ groups }: { groups: RuneGroup[] }) {
  const [query, setQuery] = useState('');
  const [selection, setSelection] = useState<string>();
  const catalog = useRef<HTMLDivElement>(null);
  const brief = useRef<HTMLElement>(null);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const isFiltered = terms.length > 0;
  const results = groups
    .map((group) => ({
      ...group,
      runes: group.runes.filter((rune) => {
        const text = `${rune.name} ${rune.description} ${rune.purpose} ${group.name} ${group.discipline}`.toLowerCase();
        return terms.every((term) => text.includes(term));
      }),
    }))
    .filter((group) => group.runes.length > 0);
  const count = results.reduce((total, group) => total + group.runes.length, 0);
  const selectedGroup = groups.find((group) => group.runes.some((rune) => rune.id === selection))
    ?? groups.find((group) => group.runes.length > 0);
  const selectedRune = selectedGroup?.runes.find((rune) => rune.id === selection) ?? selectedGroup?.runes[0];

  useEffect(() => {
    function revealCircle() {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target instanceof HTMLDetailsElement && catalog.current?.contains(target)) target.open = true;
    }

    revealCircle();
    window.addEventListener('hashchange', revealCircle);
    return () => window.removeEventListener('hashchange', revealCircle);
  }, [isFiltered]);

  function showRune(id: string) {
    setSelection(id);
    const panel = brief.current;
    if (panel && panel.getBoundingClientRect().top > window.innerHeight - 100) {
      panel.scrollIntoView({ block: 'start' });
    }
  }

  return (
    <div className="not-prose warren-catalog" role="region" aria-label="Rune catalog" ref={catalog}>
      <aside className="warren-rune-sidebar" aria-label="Rune categories">
        <div className="warren-catalog-controls" role="search" aria-label="Rune catalog">
          <label>
            <span>Find a Rune</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try feasibility" />
          </label>
        </div>
        <div className="warren-catalog-status">
          <p role="status">{isFiltered ? `${count} ${count === 1 ? 'Rune' : 'Runes'} found` : `${count} Runes by purpose`}</p>
          {isFiltered && <button type="button" onClick={() => setQuery('')}>Clear search</button>}
        </div>
        <div className="warren-rune-categories">
          {count === 0 && <p className="warren-empty">Try another term or clear the search.</p>}
          {results.map((group) => (
            <details
              className="warren-disclosure warren-rune-group"
              id={group.id}
              key={`${group.id}:${isFiltered}`}
              name={isFiltered ? undefined : 'rune-categories'}
              open={isFiltered || undefined}
            >
              <summary>
                <strong>{group.discipline}</strong>
                <span className="warren-disclosure-count">{group.runes.length}<span className="sr-only"> Runes</span></span>
                {!isFiltered && <span className="warren-rune-bar" aria-hidden="true"><span style={{ width: group.barWidth }} /></span>}
              </summary>
              <ul>{group.runes.map((rune) => (
                <li key={rune.id}>
                  <button type="button" aria-pressed={rune.id === selectedRune?.id} aria-controls="rune-brief" onClick={() => showRune(rune.id)}>
                    <span>{rune.name}</span>
                    {group.runes.some((other) => other.id !== rune.id && other.name === rune.name) && <small>{rune.purpose}</small>}
                  </button>
                </li>
              ))}</ul>
            </details>
          ))}
        </div>
      </aside>
      {selectedGroup && selectedRune && (
        <section className="warren-rune-brief" id="rune-brief" ref={brief} aria-labelledby="rune-brief-title" aria-live="polite">
          <header className="warren-skill-heading">
            <h2 id="rune-brief-title">{selectedRune.name}</h2>
            <div className="warren-skill-meta">
              <Link href={`/circles/${selectedGroup.id}/`}>{selectedGroup.name}</Link>
              <span className="warren-rune-status">{selectedRune.status}</span>
            </div>
          </header>
          <dl>
            <div><dt>Description</dt><dd>{selectedRune.description}</dd></div>
            <div><dt>Capability</dt><dd>{selectedRune.purpose}</dd></div>
            <div><dt>Rune ID</dt><dd><code>{selectedRune.id}</code></dd></div>
            <div><dt>Version</dt><dd>{selectedRune.version}</dd></div>
            <div><dt>Input</dt><dd>{selectedRune.input}</dd></div>
            <div><dt>Output</dt><dd>{selectedRune.output}</dd></div>
            <div><dt>Evaluation</dt><dd>{selectedRune.evaluation}</dd></div>
            <div><dt>Tool policy</dt><dd>{selectedRune.toolPolicy}</dd></div>
          </dl>
        </section>
      )}
    </div>
  );
}
