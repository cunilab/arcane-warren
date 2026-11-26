# Arcane Warren

Many paths. Shared discoveries.

A Cunilab concept-stage project for human-guided multi-agent collaboration. This repository hosts the static project website; no agent runtime or Cairn integration is implemented here.

## Preview

Run `python3 -m http.server 8000` from the repository root and visit http://localhost:8000.

## Website

- `index.html`: overview
- `philosophy/`: origin, name, creed
- `circles/`: directory and nine discipline pages
- `delvers/`: individual worker profiles
- `orchestration/`: proposed coordination and authority model
- `memory/`: Cairn Memory integration plan
- `expeditions/`: lifecycle and illustrative collaboration
- `guide/`: vocabulary and agent/task contracts
- `roadmap/`: proposed development phases
- `styles.css`: shared responsive stylesheet
- `assets/`: existing artwork

All navigation uses relative URLs for GitHub Pages project-site hosting. No build step or external dependencies.

Related: [Cunilab](https://github.com/cunilab), [Cairn Memory](https://github.com/cunilab/cairn-memory).

## Artwork

All site artwork is represented by labeled placeholders in `assets/images/`. See [the asset checklist](assets/ASSET-MANIFEST.md) for recommended dimensions, intended subject and placements. Replace SVGs directly, or run `python3 scripts/replace_asset.py <registered-path> <your-image>` for PNG, JPG or WebP artwork. The script updates references across all registered pages. Original artwork files remain unused. No finished artwork was added.
