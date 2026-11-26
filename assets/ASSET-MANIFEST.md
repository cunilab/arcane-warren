# Arcane Warren — artwork checklist

All website image slots use plain labeled SVG placeholders, not finished illustrations. The original artwork files are retained for history but no longer referenced. Existing functional HTML diagrams and navigation remain.

## Replace a placeholder

- SVG: overwrite the registered file with your own SVG.
- PNG, JPEG or WebP: run `python3 scripts/replace_asset.py assets/images/scenes/warren-hero.svg /path/to/your-image.webp` from the repository root. This copies your existing image and updates every page reference and the inventory. Commit the resulting changes. The former placeholder remains unreferenced.
- Use the recommended aspect ratios to avoid unwanted cropping. Circle and worker imagery is reused across the site.
- The dimensions are recommended source sizes, not fixed display sizes.

## Inventory (46 unique images)

| Asset | Recommended dimensions | Purpose | Placements |
|---|---:|---|---|
| `assets/images/brand/mark.svg` | 512 × 512 | Square logo mark / favicon; transparent background preferred. | All 41 pages |
| `assets/images/brand/wordmark.svg` | 1000 × 400 | Full logo or wordmark; transparent background preferred. | `index.html` |
| `assets/images/characters/aldric.svg` | 900 × 1200 | Individual Aldric portrait; consistent character design. | `circles/abjuration/index.html`, `delvers/aldric/index.html` |
| `assets/images/characters/auren.svg` | 900 × 1200 | Individual Auren portrait; consistent character design. | `circles/commerce/index.html`, `delvers/auren/index.html` |
| `assets/images/characters/cyra.svg` | 900 × 1200 | Individual Cyra portrait; consistent character design. | `circles/divination/index.html`, `delvers/cyra/index.html` |
| `assets/images/characters/dorian.svg` | 900 × 1200 | Individual Dorian portrait; consistent character design. | `circles/alchemy/index.html`, `delvers/dorian/index.html` |
| `assets/images/characters/elara.svg` | 900 × 1200 | Individual Elara portrait; consistent character design. | `circles/commerce/index.html`, `delvers/elara/index.html` |
| `assets/images/characters/eldrin.svg` | 900 × 1200 | Individual Eldrin portrait; consistent character design. | `circles/lore/index.html`, `delvers/eldrin/index.html` |
| `assets/images/characters/eryx.svg` | 900 × 1200 | Individual Eryx portrait; consistent character design. | `circles/chronomancy/index.html`, `delvers/eryx/index.html` |
| `assets/images/characters/kael.svg` | 900 × 1200 | Individual Kael portrait; consistent character design. | `circles/abjuration/index.html`, `delvers/kael/index.html` |
| `assets/images/characters/kairen.svg` | 900 × 1200 | Individual Kairen portrait; consistent character design. | `circles/illusion/index.html`, `delvers/kairen/index.html` |
| `assets/images/characters/keeper.svg` | 900 × 1200 | Symbolic human authority portrait. | `orchestration/index.html` |
| `assets/images/characters/liora.svg` | 900 × 1200 | Individual Liora portrait; consistent character design. | `circles/enchantment/index.html`, `delvers/liora/index.html` |
| `assets/images/characters/lucerna.svg` | 900 × 1200 | Lightkeeper portrait. | `orchestration/index.html` |
| `assets/images/characters/lyra.svg` | 900 × 1200 | Individual Lyra portrait; consistent character design. | `circles/illusion/index.html`, `delvers/lyra/index.html` |
| `assets/images/characters/magnus.svg` | 900 × 1200 | Individual Magnus portrait; consistent character design. | `circles/artifice/index.html`, `delvers/magnus/index.html` |
| `assets/images/characters/mira.svg` | 900 × 1200 | Individual Mira portrait; consistent character design. | `circles/alchemy/index.html`, `delvers/mira/index.html` |
| `assets/images/characters/morwen.svg` | 900 × 1200 | Individual Morwen portrait; consistent character design. | `circles/illusion/index.html`, `delvers/morwen/index.html` |
| `assets/images/characters/nyra.svg` | 900 × 1200 | Individual Nyra portrait; consistent character design. | `circles/enchantment/index.html`, `delvers/nyra/index.html` |
| `assets/images/characters/orin.svg` | 900 × 1200 | Individual Orin portrait; consistent character design. | `circles/lore/index.html`, `delvers/orin/index.html` |
| `assets/images/characters/rune.svg` | 900 × 1200 | Individual Rune portrait; consistent character design. | `circles/artifice/index.html`, `delvers/rune/index.html` |
| `assets/images/characters/sylwen.svg` | 900 × 1200 | Individual Sylwen portrait; consistent character design. | `circles/chronomancy/index.html`, `delvers/sylwen/index.html` |
| `assets/images/characters/thalos.svg` | 900 × 1200 | Individual Thalos portrait; consistent character design. | `circles/artifice/index.html`, `delvers/thalos/index.html` |
| `assets/images/characters/vaelis.svg` | 900 × 1200 | Individual Vaelis portrait; consistent character design. | `circles/lore/index.html`, `delvers/vaelis/index.html` |
| `assets/images/characters/valen.svg` | 900 × 1200 | Individual Valen portrait; consistent character design. | `circles/commerce/index.html`, `delvers/valen/index.html` |
| `assets/images/characters/vesper.svg` | 900 × 1200 | Individual Vesper portrait; consistent character design. | `circles/divination/index.html`, `delvers/vesper/index.html` |
| `assets/images/characters/veyra.svg` | 900 × 1200 | Individual Veyra portrait; consistent character design. | `circles/enchantment/index.html`, `delvers/veyra/index.html` |
| `assets/images/characters/zephyr.svg` | 900 × 1200 | Individual Zephyr portrait; consistent character design. | `circles/divination/index.html`, `delvers/zephyr/index.html` |
| `assets/images/circles/abjuration.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Abjuration. | `index.html`, `circles/index.html`, `circles/abjuration/index.html` |
| `assets/images/circles/alchemy.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Alchemy. | `index.html`, `circles/index.html`, `circles/alchemy/index.html` |
| `assets/images/circles/artifice.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Artifice. | `index.html`, `circles/index.html`, `circles/artifice/index.html` |
| `assets/images/circles/chronomancy.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Chronomancy. | `index.html`, `circles/index.html`, `circles/chronomancy/index.html` |
| `assets/images/circles/commerce.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Commerce. | `index.html`, `circles/index.html`, `circles/commerce/index.html` |
| `assets/images/circles/divination.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Divination. | `index.html`, `circles/index.html`, `circles/divination/index.html` |
| `assets/images/circles/enchantment.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Enchantment. | `index.html`, `circles/index.html`, `circles/enchantment/index.html` |
| `assets/images/circles/illusion.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Illusion. | `index.html`, `circles/index.html`, `circles/illusion/index.html` |
| `assets/images/circles/lore.svg` | 1200 × 675 | Discipline environment or symbolic illustration for Lore. | `index.html`, `circles/index.html`, `circles/lore/index.html` |
| `assets/images/diagrams/delver-anatomy.svg` | 1600 × 900 | Identity, skills, tools, permissions and outputs. | `guide/index.html` |
| `assets/images/diagrams/expedition-lifecycle.svg` | 1600 × 900 | Seven-stage expedition diagram. | `expeditions/index.html` |
| `assets/images/diagrams/memory-lifecycle.svg` | 1600 × 900 | Recall, Explore, Distill, Preserve. | `memory/index.html` |
| `assets/images/diagrams/orchestration.svg` | 1600 × 900 | Keeper, Lucerna, Circles and Cairn. HTML diagram remains. | `orchestration/index.html` |
| `assets/images/diagrams/roadmap.svg` | 1600 × 900 | Four-phase roadmap; no invented dates. | `roadmap/index.html` |
| `assets/images/scenes/cairn-memory.svg` | 1200 × 675 | Memory landmark illustration. | `memory/index.html` |
| `assets/images/scenes/origin.svg` | 1200 × 675 | Rabbit hole, curiosity and discovery. | `index.html`, `philosophy/index.html` |
| `assets/images/scenes/product-expedition.svg` | 1200 × 675 | Product launch collaboration illustration. | `expeditions/index.html` |
| `assets/images/scenes/warren-hero.svg` | 1200 × 1000 | Main hero artwork: interconnected arcane realm. | `index.html` |
