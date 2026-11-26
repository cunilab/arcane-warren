# Arcane Warren

Many paths. Shared discoveries.

A Cunilab concept-stage project for human-guided multi-agent collaboration. This repository hosts a static website and foundation blueprint; no agent runtime or Cairn integration is implemented here.

## Preview and edit

The generated website requires no build step to serve on GitHub Pages.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

Edit `site/content.json` for Circle and Delver information, `site/assets.json` for artwork paths, `site/build.mjs` for shared layout and content, and `styles.css` or `site.js` for presentation and filtering. Regenerate and audit with Node.js and Python 3:

```sh
node site/build.mjs
python3 scripts/check_site.py
```

Commit generated pages alongside source changes. GitHub Pages serves the checked-in static output from main.

## Artwork

All 70 artwork slots are placeholders. See [the artwork checklist](assets/ASSET-MANIFEST.md) for dimensions and placements. No finished artwork is supplied. To replace a placeholder with your own SVG, PNG, JPG or WebP:

```sh
python3 scripts/replace_asset.py characters/veyra /path/to/veyra.webp
python3 scripts/check_site.py
```

The registry and generated pages are updated together. Original unused SVG files remain for history.

## Related

- [Cunilab](https://github.com/cunilab)
- [Cairn Memory](https://github.com/cunilab/cairn-memory)
