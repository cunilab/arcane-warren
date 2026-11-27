import Link from 'next/link';
import { PlaceholderImage } from '@/components/handbook';
import { ZoomableImage } from '@/components/zoom-image';
import { circles, getArt, relics, runeCount } from '@/lib/warren';

const entries = [
  { title: 'Set the goal', href: '/keeper/', description: 'The Keeper defines scope and what counts as success.' },
  { title: 'Plan the work', href: '/lucerna/', description: 'Lucerna defines Quests and assigns Circles.' },
  { title: 'Do the work', href: '/circles/', description: 'Each Circle applies relevant Runes and returns evidence.' },
  { title: 'Review the result', href: '/quests/#quest-states', description: 'The Keeper decides what to accept or revise.' },
  { title: 'Preserve lessons', href: '/memory/', description: 'Cairn is the selected service for reusable lessons.' },
];

const inventory = [
  { label: 'Circles', count: circles.length, href: '/circles/' },
  { label: 'proposed Runes', count: runeCount, href: '/runes/' },
  { label: 'proposed Relics', count: relics.length, href: '/covenants/#relics' },
];

export default function Home() {
  const art = getArt('scenes/warren-hero');

  return (
    <>
      <header className="warren-header">
        <a className="warren-skip" href="#main">Skip to content</a>
        <div className="warren-wrap warren-header-inner">
          <Link className="warren-wordmark" href="/">
            <img className="warren-mark" src={getArt('brand/mark').src} alt="" width={28} height={28} />
            Arcane Warren
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/guide/">Field guide</Link>
            <Link href="/architecture/">How it works</Link>
            <Link href="/circles/">Circles</Link>
            <Link href="/quests/">Quests</Link>
            <Link href="/runes/">Runes</Link>
            <Link href="/skills/">Skills</Link>
          </nav>
        </div>
      </header>
      <main id="main" className="warren-home">
        <section className="warren-hero" aria-labelledby="warren-title">
          <figure className="warren-hero-art">
            <ZoomableImage src={art.src} alt={art.alt ?? art.label} width={art.width} height={art.height} caption={art.caption} priority />
          </figure>
          <div className="warren-wrap warren-hero-copy">
            <h1 id="warren-title">Many paths.<br />Shared discoveries.</h1>
            <p className="warren-intro">Arcane Warren is a blueprint for directing specialized AI workers. You set the goal and review the evidence they bring back.</p>
            <div className="warren-actions">
              <Link className="warren-button" href="/guide/">Read the field guide</Link>
              <Link className="warren-text-link" href="/quests/#quest-contract">View the Quest contract</Link>
            </div>
          </div>
        </section>
        <section className="warren-wrap warren-index" aria-labelledby="warren-index-title">
          <ul className="warren-stats" aria-label="Handbook inventory">
            {inventory.map(({ label, count, href }) => (
              <li key={href}><Link href={href}><strong>{count}</strong><span>{label}</span></Link></li>
            ))}
          </ul>
          <h2 id="warren-index-title">From a question to a result</h2>
          <PlaceholderImage id="diagrams/home-flow" />
          <ol className="warren-diagram-key" aria-labelledby="warren-index-title">
            {entries.map(({ title, href, description }) => (
              <li key={href}>
                <strong><Link href={href}>{title}</Link></strong>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <footer className="warren-wrap warren-footer">
        <p>A concept project by <a href="https://github.com/cunilab">Cunilab</a>.</p>
        <a href="https://github.com/cunilab/arcane-warren">Project source</a>
      </footer>
    </>
  );
}
