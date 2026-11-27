import Link from 'next/link';
import { circles, getArt, getCircle, getCircleRunes, principles, relics, stages } from '@/lib/warren';
import { RuneCatalogView } from './rune-catalog';
import { ZoomableImage } from './zoom-image';

function artAlt(id: string, label: string, alt?: string) {
  const kind = id.startsWith('characters/') ? 'portrait' : 'illustration';
  return alt ?? `${label.replace(/^Circle of /, '')} ${kind} placeholder`;
}

function readerCaption(id: string, caption?: string) {
  return id.startsWith('circles/') ? undefined : caption;
}

const storedRelicAccess = 'Explicit Quest authorization; credentials and adapters are not implemented.';

function relicAccess(access: string) {
  if (access === storedRelicAccess) return 'A Quest must explicitly allow this. Sign-in details and the connection are not built yet.';
  return access;
}

function Artwork({ id, priority = false }: { id: string; priority?: boolean }) {
  const art = getArt(id);
  return (
    <ZoomableImage
      src={art.src}
      alt={artAlt(id, art.label, art.alt)}
      width={art.width}
      height={art.height}
      caption={readerCaption(id, art.caption)}
      priority={priority}
    />
  );
}

export function PlaceholderImage({ id }: { id: string }) {
  const caption = readerCaption(id, getArt(id).caption);
  return (
    <figure className="not-prose warren-art">
      <Artwork id={id} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function Banner({ id, title, summary }: { id: string; title: string; summary: string }) {
  const caption = readerCaption(id, getArt(id).caption);
  return (
    <figure className={caption ? 'not-prose warren-banner warren-art' : 'not-prose warren-banner'}>
      <div className="warren-banner-media">
        <Artwork id={id} />
        <div className="warren-banner-copy">
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function SceneHero({ id, title, summary }: { id: string; title: string; summary: string }) {
  return <Banner id={id} title={title} summary={summary} />;
}

export function RoleHero({ id, title, description, children }: { id: string; title: string; description: string; children?: import('react').ReactNode }) {
  const caption = readerCaption(id, getArt(id).caption);
  return (
    <div className="not-prose warren-role">
      <figure className="warren-art">
        <Artwork id={id} />
        {caption ? <figcaption>{caption}</figcaption> : null}
      </figure>
      <div className="warren-role-copy">
        <h1>{title}</h1>
        <p className="warren-role-summary">{description}</p>
        {children}
      </div>
    </div>
  );
}

export function CircleDirectory() {
  return (
    <div className="not-prose">
      <ul className="warren-directory" aria-label="Circles and their listed partners">
        {circles.map((circle) => (
          <li key={circle.id} className="warren-panel">
            <PlaceholderImage id={`circles/${circle.id}`} />
            <div className="warren-directory-copy">
              <h2><Link href={`/circles/${circle.id}/`}>{circle.name}</Link></h2>
              <span className="warren-kicker">{circle.discipline}</span>
              <p>{circle.purpose}</p>
              <Link className="warren-count-link" href={`/runes/#${circle.id}`}>{circle.runeIds.length} proposed Runes</Link>
              <p className="warren-partners-label">Listed partners</p>
              <ul className="warren-chips" aria-label={`Listed partners for ${circle.name}`}>
                {circle.partners.map((id) => <li key={id}><Link href={`/circles/${id}/`}>{getCircle(id).name}</Link></li>)}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CircleProfile({ id }: { id: string }) {
  const circle = getCircle(id);

  return (
    <>
      <Banner id={`circles/${circle.id}`} title={circle.name} summary={`${circle.discipline}. ${circle.purpose}`} />
      <p>{circle.meaning}</p>
      <div className="not-prose warren-circle-facts">
        <section className="warren-panel" aria-labelledby="typical-results">
          <h2 id="typical-results">Typical results</h2>
          <ul>{circle.outputs.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="warren-panel" aria-labelledby="often-works-with">
          <h2 id="often-works-with">Listed partners</h2>
          <ul className="warren-chips" aria-labelledby="often-works-with">
            {circle.partners.map((partner) => (
              <li key={partner}><Link href={`/circles/${partner}/`}>{getCircle(partner).name}</Link></li>
            ))}
          </ul>
        </section>
        <section className="warren-panel">
          <h2>Runes</h2>
          <p className="warren-rune-total"><strong>{circle.runeIds.length}</strong> proposed Runes</p>
          <p><Link href={`/runes/#${circle.id}`}>Browse {circle.name}’s {circle.runeIds.length} proposed Runes</Link></p>
        </section>
      </div>
    </>
  );
}

export function ExpeditionTimeline() {
  return (
    <div className="not-prose">
      <PlaceholderImage id="diagrams/expedition-lifecycle" />
      <ol className="warren-diagram-key" aria-label="Expedition lifecycle">
        {stages.map(([name, description]) => (
          <li key={name}><strong>{name}</strong><p>{description}</p></li>
        ))}
      </ol>
    </div>
  );
}

export function PracticePrinciples() {
  return (
    <div className="not-prose">
      <dl className="warren-card-grid" aria-label="Working principles">
        {principles.map(([name, , behavior]) => (
          <div className="warren-panel" key={name}><dt>{name}</dt><dd>{behavior}</dd></div>
        ))}
      </dl>
    </div>
  );
}

export function RelicCatalog() {
  return (
    <div className="not-prose">
      <details className="warren-disclosure warren-relics">
        <summary><strong>{relics.length} proposed Relics</strong></summary>
        <div className="warren-table" role="region" aria-label="Proposed Relic registry" tabIndex={0}>
          <table>
            <caption className="sr-only">Proposed Relic registry</caption>
            <thead><tr><th scope="col">Relic</th><th scope="col">Status and access</th><th scope="col">Intended Circle uses</th></tr></thead>
            <tbody>
              {relics.map(({ id, name, status, access, assignments }) => (
                <tr key={id}>
                  <th scope="row">{name}</th>
                  <td><strong>{status}</strong><p>{relicAccess(access)}</p></td>
                  <td><ul>{Array.from(Map.groupBy(assignments, ({ circle }) => circle), ([circle, entries]) => (
                    <li key={circle}>
                      <Link href={`/circles/${circle}/`}>{getCircle(circle).name}</Link>
                      <p>{Array.from(new Set(entries.map(({ use }) => use))).join(' ')}</p>
                    </li>
                  ))}</ul></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}

export function RuneCatalog() {
  const largestGroup = Math.max(1, ...circles.map((circle) => circle.runeIds.length));

  return (
    <>
      <RuneCatalogView groups={circles.map((circle) => ({
        id: circle.id,
        name: circle.name,
        discipline: circle.discipline,
        barWidth: `${circle.runeIds.length / largestGroup * 100}%`,
        runes: getCircleRunes(circle),
      }))} />
    </>
  );
}
