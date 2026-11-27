import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="warren-wrap py-24">
      <p className="warren-tagline">Arcane Warren</p>
      <h1 className="mt-2 mb-5 font-serif text-5xl">Page not found</h1>
      <Link className="warren-text-link" href="/guide/">Return to the field guide</Link>
    </main>
  );
}
