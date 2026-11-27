# Arcane Warren

Many paths. Shared discoveries.

A Cunilab concept for human-directed collaboration among specialized AI workers. The Fumadocs handbook describes the operating model, a blank Quest contract, and proposed capabilities. Agent execution and the Cairn integration are planned.

## Preview and edit

Use Node.js 22 or later and Python 3.9 or later for the static audit.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 8000
```

Open http://localhost:8000.

Edit the handbook in `content/handbook/`, Circle and Quest records in `site/content.json`, and capability records in `site/rune-registry.json`. The public pages are generated from these sources.

```sh
npm run build
npm run check
```

The static export is written to `out/`. To host it below a path like GitHub Pages at `/arcane-warren`, set `NEXT_PUBLIC_BASE_PATH=/arcane-warren` for both commands. Publish `out/` as the site root.

## Artwork

All 70 artwork slots are placeholders. See [the artwork checklist](assets/ASSET-MANIFEST.md) for recommended dimensions. To replace a placeholder with your own SVG, PNG, JPEG or WebP, update the shared registry and then restart the preview or rebuild.

```sh
python3 scripts/replace_asset.py scenes/warren-hero /path/to/warren-hero.webp
```

## Related

- [Cunilab](https://github.com/cunilab)
- [Cairn Memory](https://github.com/cunilab/cairn-memory)
