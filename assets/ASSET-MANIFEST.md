# Arcane Warren artwork checklist

The original artwork slots remain as placeholders. The registry in `site/assets.json` holds the current file paths.

To install artwork for a slot, run `python3 scripts/replace_asset.py scenes/warren-hero /path/to/warren-hero.webp` from the repository root. Restart the preview or rebuild to copy it into the site.

| Asset ID | Recommended size | Purpose |
| --- | ---: | --- |
| `brand/mark` | 512 × 512 | Square logo mark / favicon; transparent background preferred. |
| `brand/wordmark` | 1000 × 400 | Full logo or wordmark; transparent background preferred. |
| `characters/aldric` | 900 × 1200 | Individual Aldric portrait; consistent character design. |
| `characters/auren` | 900 × 1200 | Individual Auren portrait; consistent character design. |
| `characters/cyra` | 900 × 1200 | Individual Cyra portrait; consistent character design. |
| `characters/dorian` | 900 × 1200 | Individual Dorian portrait; consistent character design. |
| `characters/elara` | 900 × 1200 | Individual Elara portrait; consistent character design. |
| `characters/eldrin` | 900 × 1200 | Individual Eldrin portrait; consistent character design. |
| `characters/eryx` | 900 × 1200 | Individual Eryx portrait; consistent character design. |
| `characters/kael` | 900 × 1200 | Individual Kael portrait; consistent character design. |
| `characters/kairen` | 900 × 1200 | Individual Kairen portrait; consistent character design. |
| [`characters/keeper`](#characterskeeper) | 900 × 1200 | The Keeper. |
| `characters/liora` | 900 × 1200 | Individual Liora portrait; consistent character design. |
| [`characters/lucerna`](#characterslucerna) | 900 × 1200 | Lucerna. |
| `characters/lyra` | 900 × 1200 | Individual Lyra portrait; consistent character design. |
| `characters/magnus` | 900 × 1200 | Individual Magnus portrait; consistent character design. |
| `characters/mira` | 900 × 1200 | Individual Mira portrait; consistent character design. |
| `characters/morwen` | 900 × 1200 | Individual Morwen portrait; consistent character design. |
| `characters/nyra` | 900 × 1200 | Individual Nyra portrait; consistent character design. |
| `characters/orin` | 900 × 1200 | Individual Orin portrait; consistent character design. |
| `characters/rune` | 900 × 1200 | Individual Rune portrait; consistent character design. |
| `characters/sylwen` | 900 × 1200 | Individual Sylwen portrait; consistent character design. |
| `characters/thalos` | 900 × 1200 | Individual Thalos portrait; consistent character design. |
| `characters/vaelis` | 900 × 1200 | Individual Vaelis portrait; consistent character design. |
| `characters/valen` | 900 × 1200 | Individual Valen portrait; consistent character design. |
| `characters/vesper` | 900 × 1200 | Individual Vesper portrait; consistent character design. |
| `characters/veyra` | 900 × 1200 | Individual Veyra portrait; consistent character design. |
| `characters/zephyr` | 900 × 1200 | Individual Zephyr portrait; consistent character design. |
| [`circles/abjuration`](#circlesabjuration) | 1200 × 675 | Circle of Abjuration. |
| [`circles/alchemy`](#circlesalchemy) | 1200 × 675 | Circle of Alchemy. |
| [`circles/artifice`](#circlesartifice) | 1200 × 675 | Circle of Artifice. |
| [`circles/chronomancy`](#circleschronomancy) | 1200 × 675 | Circle of Chronomancy. |
| [`circles/commerce`](#circlescommerce) | 1200 × 675 | Circle of Commerce. |
| [`circles/divination`](#circlesdivination) | 1200 × 675 | Circle of Divination. |
| [`circles/enchantment`](#circlesenchantment) | 1200 × 675 | Circle of Enchantment. |
| [`circles/illusion`](#circlesillusion) | 1200 × 675 | Circle of Illusion. |
| [`circles/lore`](#circleslore) | 1200 × 675 | Circle of Lore. |
| `diagrams/delver-anatomy` | 1600 × 900 | Identity, skills, tools, permissions and outputs. |
| [`diagrams/expedition-lifecycle`](#diagramsexpedition-lifecycle) | 1600 × 900 | Expedition lifecycle. |
| `diagrams/memory-lifecycle` | 1600 × 900 | Recall, Explore, Distill, Preserve. |
| `diagrams/orchestration` | 1600 × 900 | Keeper, Lucerna, Circles and Cairn. HTML diagram remains. |
| `diagrams/roadmap` | 1600 × 900 | Four-phase roadmap; no invented dates. |
| [`diagrams/design-layers`](#diagramsdesign-layers) | 1600 × 900 | Warren design layers. |
| [`diagrams/home-flow`](#diagramshome-flow) | 1600 × 900 | From a question to a result. |
| [`diagrams/lucerna-dispatch`](#diagramslucerna-dispatch) | 1600 × 900 | Lucerna dispatch. |
| [`diagrams/quest-states`](#diagramsquest-states) | 1600 × 900 | Quest states. |
| [`diagrams/covenant-decision-flow`](#diagramscovenant-decision-flow) | 1600 × 900 | Covenant decision flow. |
| [`diagrams/memory-loop`](#diagramsmemory-loop) | 1600 × 900 | Memory loop. |
| [`diagrams/circle-anatomy`](#diagramscircle-anatomy) | 1600 × 900 | Circle anatomy. |
| [`diagrams/ritual-handoffs`](#diagramsritual-handoffs) | 1600 × 900 | Ritual handoffs. |
| `scenes/aldric-workspace` | 1200 × 900 | Workspace concept for Aldric. An independent sentinel with a stamped verification seal, test instruments and orderly evidence boards in a quiet hall. Placeholder only. |
| `scenes/auren-workspace` | 1200 × 900 | Workspace concept for Auren. A disciplined treasurer with balanced scales, orderly ledgers and restrained antique gold in a quiet accounting vault. Placeholder only. |
| [`scenes/cairn-memory`](#scenescairn-memory) | 1200 × 675 | Cairn Memory. |
| `scenes/cyra-workspace` | 1200 × 900 | Workspace concept for Cyra. A quiet oracle at an astronomical observatory with open manuscripts, a luminous eye-like lens and star maps used as metaphors for inquiry. Placeholder only. |
| `scenes/dorian-workspace` | 1200 × 900 | Workspace concept for Dorian. A grounded forg​​emaster in protective work attire among furnaces, gauges, material samples and carefully organized production stations. Placeholder only. |
| `scenes/elara-workspace` | 1200 × 900 | Workspace concept for Elara. A welcoming arcane envoy in warm muted garments with sealed correspondence, an open doorway and a calm listening chamber. Placeholder only. |
| `scenes/eldrin-workspace` | 1200 × 900 | Workspace concept for Eldrin. A thoughtful sage in a quiet council library with multiple open manuscripts, a modest guiding lantern and overlapping maps of perspectives. Placeholder only. |
| `scenes/eryx-workspace` | 1200 × 900 | Workspace concept for Eryx. A chronomancer with a restrained mechanical dial, sequencing charts and interconnected time markers in a dark observatory-like planning room. Placeholder only. |
| `scenes/kael-workspace` | 1200 × 900 | Workspace concept for Kael. A restrained arcane guardian in dark protective attire with geometric wardstones, gate mechanisms and a carefully mapped boundary diagram. Placeholder only. |
| `scenes/kairen-workspace` | 1200 × 900 | Workspace concept for Kairen. A media conjurer with a dark theater, floating rectangular frames, optical lanterns and carefully arranged editing instruments. Placeholder only. |
| `scenes/liora-workspace` | 1200 × 900 | Workspace concept for Liora. An arcane storyteller with luminous quill, layered parchment and threads of ink woven into a restrained dark fantasy library. Placeholder only. |
| `scenes/lyra-workspace` | 1200 × 900 | Workspace concept for Lyra. A poised illusionist in an atelier of restrained violet prisms, color studies, translucent planes and elegant visual compositions. Placeholder only. |
| `scenes/magnus-workspace` | 1200 × 900 | Workspace concept for Magnus. A meticulous arcane architect with measuring compass, architectural drawings and suspended geometric models in a vaulted drafting chamber. Placeholder only. |
| `scenes/mira-workspace` | 1200 × 900 | Workspace concept for Mira. A pragmatic alchemist with labeled vessels, prototype objects, experiment notes and restrained green-violet glow in a practical laboratory. Placeholder only. |
| `scenes/morwen-workspace` | 1200 × 900 | Workspace concept for Morwen. An arcane sculptor with faceted models, measuring instruments, carved geometric objects and a practical fabrication bench. Placeholder only. |
| `scenes/nyra-workspace` | 1200 × 900 | Workspace concept for Nyra. An alert messenger in layered midnight-violet garments, surrounded by delicate threads connecting illuminated message panels and listening alcoves. Placeholder only. |
| `scenes/origin` | 1200 × 675 | Rabbit hole, curiosity and discovery. |
| `scenes/orin-workspace` | 1200 × 900 | Workspace concept for Orin. A knowledge cartographer with layered maps, indexed cairn landmarks and interconnected archival shelves, restrained sage and violet tones. Placeholder only. |
| `scenes/product-expedition` | 1200 × 675 | Product launch collaboration illustration. |
| `scenes/rune-workspace` | 1200 × 900 | Workspace concept for Rune. A practical runesmith in dark ink-stained workwear, surrounded by etched plates, orderly code-like inscriptions and articulated mechanisms. Avoid literal unreadable code as decoration. Placeholder only. |
| `scenes/sylwen-workspace` | 1200 × 900 | Workspace concept for Sylwen. A workflow weaver at a mechanical loom of interlocking threads and structured runic circuits, with teal-violet highlights. Placeholder only. |
| `scenes/thalos-workshop` | 1200 × 900 | Landscape concept art of Thalos's engineering workshop; practical machinery, manuscripts, bronze and ember accents. Placeholder only. |
| `scenes/vaelis-workspace` | 1200 × 900 | Workspace concept for Vaelis. A chronicler at a dark archive desk, with bound volumes, precise ink markings and a luminous seal on organized decision records. Placeholder only. |
| `scenes/valen-workspace` | 1200 × 900 | Workspace concept for Valen. An elegant but practical arcane merchant with trade ledgers, balanced tokens and a dark marketplace map rather than extravagant treasure. Placeholder only. |
| `scenes/vesper-workspace` | 1200 × 900 | Workspace concept for Vesper. A precise seer surrounded by measured constellations, calibrated lenses and clean geometric data diagrams in a dark blue observatory. Placeholder only. |
| `scenes/veyra-workspace` | 1200 × 900 | Workspace concept for Veyra. A composed arcane strategist surrounded by resonance rings, audience maps and illuminated communication scrolls; refined violet textiles and warm brass. Placeholder only. |
| [`scenes/warren-hero`](#sceneswarren-hero) | 1200 × 1000 | Warren hero. |
| `scenes/zephyr-workspace` | 1200 × 900 | Workspace concept for Zephyr. A frontier pathfinder in practical dark traveling attire, with windrose, maps, directional instruments and distant passages. Placeholder only. |

## Shared image style

The Arcane Warren is a hidden fantasy warren of carved stone halls, roots, arches, carved wood, brass, glowing runes, and lanterns. Magic here is order and craft. Make the images bold, inviting, and full of wonder, with a subject the reader can understand at a glance. Describe the palette in color words for Imagine. Use deep plum-black shadows, warm lantern gold, soft arcane violet glow, and pale moonlit highlights.

### Family A · Painted fantasy scene

Center one clear focal subject so it fills about half the frame. Use at most three supporting elements, each needed to explain the idea. Leave plenty of empty space and let the background fall into soft dark shadow. Keep surfaces clear of scattered small objects, debris, swarms of floating pieces, shelves of books, and crowded props. Keep ornament sparse and decorative runes, glyphs, and dial marks subtle.

Use cinematic digital painting for the nine Circle workshops, the two role portraits, Cairn Memory, and the Warren hero. Set gold lantern light against violet arcane glow. Paint one hero object or figure in a simple setting. Suggest the architecture with a single softly lit arch or wall and use at most one light source besides the subject’s own glow. Give each Circle a distinct hall or workshop and show its discipline through an instrument or material at work. Draw each discipline from that Circle’s purpose, meaning, and outputs in `site/content.json`. Magic and tools do the work in the Circles, Cairn, and hero scenes, which are unpeopled.

The Keeper and Lucerna are roles drawn from `content/handbook/keeper.mdx` and `content/handbook/lucerna.mdx`. Each may appear as one cloaked figure seen from behind or with the face in shadow. The Keeper looks over the Warren from the high Sanctum, where the human sets direction and approves consequential actions. Lucerna carries or tends a great lantern whose light reaches toward the Circle halls, showing how the guide plans and assigns work.

Use 16:9 for Circle halls and Cairn Memory, 2:3 for the roles with a later center crop to 3:4, and 1:1 for the hero with a later center crop to 6:5. Keep the focal subject and its meaningful details inside the central safe area. Favor wordless scenes and use at most two short labels if the image needs them to make sense.

### Family B · Painted cutaway diagram

Paint a wide 16:9 cross-section of the Warren in the same painterly realism as the Artifice workshop. Use carved stone and wood, warm lantern gold, soft arcane violet light, and deep plum-black shadows. Fill the frame edge to edge with the cutaway. Make one chamber, alcove, or floor for each step or part in the page’s text list, with one clear symbol object and one large, legible stone plaque or small banner per space. Keep ornament sparse and surfaces clear of scattered props.

Stack layers as broad floors spanning the frame. Read linear flows across a horizontal gallery from left to right, arrange loops around a ring, and show states through a corridor of doors. Lead each flow with a continuous gold light and arrow-shaped runes pointing in the documented direction. Use violet for a documented return or loop segment, or a documented failure spur. Where the page describes parts used together, use a shared gold-lit threshold without arrows.

Use one to seven labels of one to three words, drawn from the text list beneath the diagram. Use the exact step or part name when it fits and an exact key noun phrase from the name when it runs longer. Keep other lettering unreadable.

### Text and exclusions

Use the exact labels listed in each brief as the full set of lettering and keep all other readable words out. Where the caption, labels, and nearby text leave a visual metaphor unclear, add a short **What this shows** section beneath the image. Keep the illustrations free of real brands and logos, the old named Delvers, modern technology such as laptops, phones, screens, and UI, gore or horror, watermarks, signatures, and any suggestion that a real Quest ran or a real result exists.

## Image briefs

The table gives the installed slot dimensions. Generate the images in the aspect ratios listed in the briefs.

### diagrams/design-layers

- Asset ID · diagrams/design-layers
- Page and position · /architecture/, under Design in “Who does what,” above the four-layer list.
- What it explains · The four responsibilities in content/handbook/architecture.mdx, covering the Keeper and Sanctum for direction and review, Lucerna for coordination, Circles for scoped work, and Cairn Memory for reusable lessons.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "The Keeper", "Lucerna", "Circles", "Cairn Memory"
- Prompt · Paint a wide cutaway of the Warren that shows how a goal is assigned, how evidence comes back for review, and where reusable lessons are kept. Stack four broad floors across a 16:9 frame so carved halls, wooden beams, and their connecting stairs run to both edges. From top to bottom, furnish the halls with a high-backed chair for the Keeper, a brass lantern for Lucerna, a work anvil for the Circles, and a low stone cairn for memory. Give each floor one symbol and keep the surrounding stonework bare. Run one continuous ribbon of gold light down the stairs between all four floors, with downward arrow-shaped runes at each landing. On a separate stair, let a thinner violet thread carry the Circles’ evidence back up to Lucerna and then to the Keeper, with upward runes ending at the top hall. Render the stone and carved wood with painterly realism, warm lantern gold, a soft arcane violet glow, and deep plum-black shadows. Carve one large, legible stone plaque per floor and use only these words in top-to-bottom order: "The Keeper", "Lucerna", "Circles", and "Cairn Memory".
- Alt text · A four-floor Warren cutaway shows a gold path descending from the Keeper through Lucerna and the Circles to Cairn Memory, with a violet evidence path rising from the Circles through Lucerna to the Keeper.
- On-page caption · The Warren design gives direction to the Keeper, coordination to Lucerna, scoped work to Circles, and reusable lessons to Cairn Memory.

### diagrams/home-flow

- Asset ID · diagrams/home-flow
- Page and position · /, under Design in “From a question to a result,” above the five links.
- What it explains · The five steps in app/page.tsx and content/handbook/architecture.mdx, from setting a human goal to reviewing evidence and preserving lessons.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "Set the goal", "Plan the work", "Do the work", "Review the result", "Preserve lessons"
- Prompt · Paint a cutaway of the Warren that follows a human goal through work and review into reusable lessons. Carve a five-chamber gallery that fills a 16:9 frame from edge to edge, with all five rooms open to view in a single horizontal row. Place a compass, a folded plan, a forge hammer, an inspection lens, and a small cairn from left to right, each alone in its chamber. Run a broad gold ribbon through the consecutive doorways, with bright arrow-shaped runes pointing right toward the archive. Give the portion that carries the Circle’s evidence from work into review a violet glow along the same path. Render carved stone and worn wood with painterly realism, warm lantern gold with soft arcane violet light and deep plum-black shadows. Carve one large, legible stone plaque per chamber and use only these words from left to right: "Set the goal", "Plan the work", "Do the work", "Review the result", and "Preserve lessons".
- Alt text · A five-chamber gallery takes a gold path left to right from setting a goal to preserving lessons, with a violet stretch carrying the work evidence into review.
- On-page caption · The design starts with a goal and carries the work through review and into reusable lessons.

### diagrams/lucerna-dispatch

- Asset ID · diagrams/lucerna-dispatch
- Page and position · /lucerna/, under Design in “Plan and assign,” above the six-step list.
- What it explains · The six steps in content/handbook/lucerna.mdx, from framing a Quest and assigning its Circle to tracking, reviewing, and returning evidence.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "Frame", "Plan", "Dispatch", "Observe", "Review", "Return"
- Prompt · Paint a cutaway of Lucerna’s dispatch gallery as it carries a Quest from its objective to the evidence returned to the Keeper. Open six adjacent chambers in one horizontal row and let their floors, walls, and overhead vaults fill the 16:9 frame edge to edge. Set a brass sighting ring, a folded plan, a dispatch lantern, a carved eye, an inspection lens, and a sealed folio in order, one object per room. Thread a gold ribbon through the doorways from left to right and mark its direction with clear arrow-shaped runes. Give the stretch from Review into Return a violet glow along the same path as the evidence reaches its final chamber. Use painterly realism with warm lantern gold on carved stone and wood, a soft arcane violet glow, and deep plum-black shadows. Carve one large, legible stone plaque per chamber and use only these words from left to right: "Frame", "Plan", "Dispatch", "Observe", "Review", and "Return".
- Alt text · Six chambers lead left to right from framing a Quest to reviewing its evidence, then a violet stretch carries the evidence into the Return chamber.
- On-page caption · Lucerna frames and assigns Quests, tracks their progress, and returns evidence for the Keeper to review.

### diagrams/quest-states

- Asset ID · diagrams/quest-states
- Page and position · /quests/, under Design in “Quest states,” above the main state list and separate notes for other states.
- What it explains · The five main Quest states in content/handbook/quests.mdx, with evidence checked against acceptance criteria before completion.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "Proposed", "Ready", "Running", "Review", "Completed"
- Prompt · Paint a Warren corridor cut away to show the five main states of a Quest. Set five open doorways side by side in a wide 16:9 view and fill the frame with the corridor’s stone walls, floor, and wooden lintels. Place a blank scroll, a prepared tool, a turning gear, an inspection lens, and a finished wax seal in the rooms from left to right, one clear object at each doorway. Lead one gold ribbon along the floor with bold right-pointing arrow runes between the successive doorways. Carry it through the inspection doorway before it ends at the final seal. Render the carved stone and wood with painterly realism, warm lantern gold, a soft arcane violet glow, and deep plum-black shadows. Carve one large, legible stone plaque per doorway and use only these words from left to right: "Proposed", "Ready", "Running", "Review", and "Completed".
- Alt text · A gold path moves left to right past five doorways from Proposed to Completed, passing through the Review doorway before reaching the final seal.
- On-page caption · A Quest moves from proposal to review. Completion requires evidence that the result meets the criteria.

### diagrams/covenant-decision-flow

- Asset ID · diagrams/covenant-decision-flow
- Page and position · /covenants/, under Design in “When something changes,” above the four escalation steps.
- What it explains · The escalation sequence in content/handbook/covenants.mdx, covering check permitted scope, pause affected work, get the Keeper’s decision, and record the outcome.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "Check scope", "Pause", "Get a decision", "Record"
- Prompt · Paint the Warren’s approval passage cut away to show what happens when changed conditions need a Keeper decision. Build a row of four connected chambers across a 16:9 frame and let the stone passage and timber vaults fill it to both edges. Place a bounded scroll, a lowered iron gate, a Keeper’s seal, and a Chronicle ledger from left to right, one symbol per chamber. Run a gold ribbon along the front walkway through all four rooms with right-pointing arrow runes between them. Keep the gate lowered behind the lit walkway as the decision continues to the ledger. Use painterly realism with warm lantern gold on carved stone and wood, a soft arcane violet glow, and deep plum-black shadows. Carve one large, legible stone plaque per chamber and use only these words from left to right: "Check scope", "Pause", "Get a decision", and "Record".
- Alt text · A gold path crosses four chambers from left to right, passing a scope scroll, a gate that pauses work, the Keeper’s seal, and the ledger recording the decision.
- On-page caption · When a change needs a decision, pause the affected work, ask the Keeper, and record the outcome.

### diagrams/memory-loop

- Asset ID · diagrams/memory-loop
- Page and position · /memory/, under Design in “Recall, check, record,” above the four memory steps.
- What it explains · The four memory steps in content/handbook/memory.mdx, including evidence checks, provenance, preservation, and later authorized recall.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "Recall", "Explore", "Distill", "Preserve"
- Prompt · Paint a cutaway of the Warren’s memory archive, where lessons are checked, recorded, and recalled when a later Quest is authorized to use them. Open four chambers around a broad oval walkway viewed from above at an angle, with their carved walls and floors filling a 16:9 frame all the way to the edges. Set an open archive drawer in the upper left, a lens in the upper right, a bound lesson in the lower right, and a stone cairn in the lower left, one object in each chamber. Trace a continuous gold current clockwise from the drawer through the lens and bound lesson to the cairn, with bright arrow-shaped runes pointing ahead at each doorway. Close the ring with a violet current rising from the cairn to the drawer, with its own arrow-shaped runes showing the direction of later authorized recall. Paint the carved stone and wood with warm lantern gold and deep plum-black shadows, letting soft arcane violet light spill along the return passage. Carve one large, legible stone plaque per chamber and use only these words in clockwise reading order: "Recall", "Explore", "Distill", and "Preserve".
- Alt text · Four archive chambers form a clockwise ring. Gold light leads from Recall through Explore and Distill to Preserve, and a violet path closes the loop back to Recall.
- On-page caption · Check recalled records against current evidence, then preserve lessons with the context needed for later use.

### diagrams/circle-anatomy

- Asset ID · diagrams/circle-anatomy
- Page and position · /grimoire/, under Design in “What an instruction profile contains,” above the three definitions.
- What it explains · The three parts in content/handbook/grimoire.mdx, covering standing Circle instructions, the current Quest, and the Covenant’s access and approval boundaries.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "Grimoire", "Quest", "Covenant"
- Prompt · Paint a cutaway of a Warren chamber where a Circle’s standing instructions, current work, and permitted actions come together. Set three distinct open alcoves side by side and spread the carved stone, beams, and floor across the full 16:9 frame. Display an open book, a rolled scroll, and a brass lock from left to right, each alone in its alcove. Open all three onto one broad stone threshold lit in gold, with an even glow where the alcoves meet. Keep the threshold free of arrowheads, directional runes, and tracks so the three alcoves read as parts used together. Render the stone and wood with painterly realism, warm lantern gold, soft arcane violet glow, and deep plum-black shadows. Carve one large, legible stone plaque per alcove and use only these words from left to right: "Grimoire", "Quest", and "Covenant".
- Alt text · Three alcoves hold an open book for standing instructions, a scroll for the current Quest, and a lock for the Covenant. All three open onto the same gold-lit threshold.
- On-page caption · The Grimoire gives standing instructions, the Quest gives the current job, and the Covenant sets permissions.

### diagrams/expedition-lifecycle

- Asset ID · diagrams/expedition-lifecycle
- Page and position · /architecture/, under Design in “An Expedition from start to finish,” above the seven stages.
- What it explains · The seven stages in site/content.json, shown by ExpeditionTimeline in components/handbook.tsx, from stating a shared goal through review and the Chronicle.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "The Call", "The Conclave", "The Descent", "The Ritual", "The Revelation", "The Return", "The Chronicle"
- Prompt · Paint a cutaway of a Warren Expedition from the first shared goal to the record of what was learned. Spread seven adjoining chambers in a single horizontal gallery that fills the 16:9 frame with carved floors, arches, and beams. From left to right, give the first four chambers a compass, a pair of interlocked rings, a carved stair, and a knotted handoff cord. Place an evidence lens, a review tray, and a bound chronicle in the last three rooms, keeping one clear symbol in each room. Run one gold path left to right across the thresholds and use arrow-shaped runes to point toward the last vault. Tint the stretch leading from the evidence lens to the review tray in violet to show the return for human review, then carry the gold light onward to the chronicle. Use painterly realism with warm lantern gold on carved stone and wood, a soft arcane violet glow, and deep plum-black shadows. Carve one large, legible stone plaque per chamber and use only these words from left to right: "The Call", "The Conclave", "The Descent", "The Ritual", "The Revelation", "The Return", and "The Chronicle".
- Alt text · Seven Expedition chambers run left to right from The Call to The Chronicle. A violet stretch takes tested evidence from The Revelation to The Return for human review.
- On-page caption · An Expedition groups Quests around a shared goal and carries their evidence into human review and the Chronicle.

### diagrams/ritual-handoffs

- Asset ID · diagrams/ritual-handoffs
- Page and position · /quests/, under Design in “When Quests work together,” above the five Ritual rules.
- What it explains · The Ritual rules in content/handbook/quests.mdx, covering establish the trigger, assign Quests in order or in parallel, hand off artifacts and allowed context, handle failures, and review evidence.
- Style family · Painted cutaway diagram
- Aspect ratio · 16:9
- Labels · "Start", "Assign", "Hand off", "Handle failures", "Review"
- Prompt · Paint a wide cutaway of a Warren gallery that shows how a Ritual moves work from one step to the next. Four stone chambers stand in one row from left to right across the full 16:9 frame, joined by a single glowing gold path with arrow-shaped runes that all point to the right. In the first chamber a brass lever is being pulled down beside a small glowing bell; in the second a plain stone table holds a short row of carved tokens laid out in order; in the third a sealed parcel passes through an open doorway toward the next chamber; in the fourth a large brass-framed lens rests on a stand. Between the third and fourth chambers, one thin violet branch splits downward from the gold path to a small barred side gate set lower in the wall, clearly apart from the main row. Keep each chamber bare except for its one symbol, with no second path, no extra lanterns, and no scattered objects. Render carved stone and wood with painterly realism, warm lantern gold, a soft arcane violet glow on the side gate, and deep plum-black shadows. Carve one large, legible stone plaque above each chamber reading "Start", "Assign", "Hand off", and "Review" from left to right, and one smaller plaque above the side gate reading "Handle failures".
- Alt text · A gold route runs from Start through Assign and Hand off to Review, with a violet spur leading to the Handle failures gate.
- On-page caption · A Ritual defines how Quests are assigned, how they pass context and artifacts, and what to do before review if something fails.

### characters/keeper

- Asset ID · characters/keeper
- Page and position · /keeper/, alongside the introduction about human ownership.
- What it explains · The human role in content/handbook/keeper.mdx that sets objectives and limits, approves consequential actions, and decides what to accept after review.
- Style family · Painted fantasy scene
- Aspect ratio · 2:3, later center-cropped to 3:4
- Labels · None
- Prompt · Paint the Keeper from behind in a dark wool cloak at the high Sanctum of the Arcane Warren. Center the figure in the vertical 2:3 painting, filling about half the frame and leaving room for the later 3:4 crop. Place a brass compass, an unused approval seal, and an empty evidence tray within reach on the stone ledge. Suggest the Warren below with the soft arcane violet outline of a single arch. Let one off-frame lantern brush the scene in gold and leave the surrounding space in soft plum-black shadow. Keep the portrait wordless.
- Alt text · The cloaked Keeper stands at the Sanctum ledge beside a brass compass, an unused approval seal, and an empty evidence tray.
- On-page caption · The Keeper sets direction and reviews the evidence.

### characters/lucerna

- Asset ID · characters/lucerna
- Page and position · /lucerna/, alongside the introduction to the proposed coordinator.
- What it explains · The coordinator in content/handbook/lucerna.mdx that turns an authorized goal into assigned Quests and returns evidence to the Keeper. The lantern’s meaning comes from content/handbook/guide.mdx.
- Style family · Painted fantasy scene
- Aspect ratio · 2:3, later center-cropped to 3:4
- Labels · None
- Prompt · Paint Lucerna as a hooded guide holding a brass lantern at a junction in the Arcane Warren. Center the figure and lantern as one silhouette filling about half the vertical 2:3 frame, with room for the later 3:4 crop. Let the lantern send two clear gold beams along separate routes, with a faint arcane violet tint at their tips. Show an empty evidence tray in a shallow stone recess within reach. Suggest the hall with one softly lit arch and let the rest sink into open plum-black shadow. Keep the portrait wordless.
- Alt text · Lucerna holds a brass lantern that lights two routes toward the Circles, with an empty evidence tray nearby.
- On-page caption · Lucerna plans and assigns work for review.

### scenes/cairn-memory

- Asset ID · scenes/cairn-memory
- Page and position · /memory/, alongside the introduction to Cairn Memory.
- What it explains · Cairn’s proposed role in content/handbook/memory.mdx as the home of reusable lessons with evidence and context, and the cairn landmark symbol in content/handbook/guide.mdx.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a weathered stone cairn at a quiet crossroads in the Arcane Warren. Center the cairn so it fills about half the wide 16:9 frame. In a single niche, use one glowing arcane violet thread to tie a blank lesson slip to its source folio. Let light from one off-frame lantern warm the stones to gold. Suggest the crossroads with two plain floor paths and one softly lit wall that falls away into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · An arcane violet thread links a lesson slip to its source folio in the niche of a stone cairn at a crossroads.
- On-page caption · Cairn is the selected service for reusable lessons.

### circles/abjuration

- Asset ID · circles/abjuration
- Page and position · /circles/ in the Abjuration card and /circles/abjuration/ beside “Typical results.”
- What it explains · Abjuration’s risk registers, test evidence, and independent review findings in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a stone ward under inspection in the Circle of Abjuration’s Warren hall. Center the ward on a plain stone slab so it fills about half the wide 16:9 frame. Suspend one brass inspection lens over the ward and let its soft arcane violet beam reveal a single hairline flaw. Set one simple brass gauge beside the lens to show how the ward is tested. Let light from one off-frame lantern warm a quiet stone wall to gold before it falls into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A brass lens reveals a hairline flaw in a stone ward while a single gauge checks it.
- On-page caption · Abjuration examines risks and test evidence.

### circles/alchemy

- Asset ID · circles/alchemy
- Page and position · /circles/ in the Alchemy card and /circles/alchemy/ beside “Typical results.”
- What it explains · Alchemy’s product hypotheses, prototype plans, and experiment findings in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a half-formed prototype suspended in the Circle of Alchemy’s Warren workshop. Center it within a paired test rig that fills about half the wide 16:9 frame. Give the rig two glass vessels on a single brass base, with one plain valve beneath each vessel. Let soft arcane violet glow at the prototype and use one off-frame lantern to catch the glass in gold. Suggest the room with a single softly lit stone wall fading into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A half-formed prototype hangs between two glass test vessels with separate brass valves.
- On-page caption · Alchemy turns hypotheses into tests.

### circles/artifice

- Asset ID · circles/artifice
- Page and position · /circles/ in the Artifice card and /circles/artifice/ beside “Typical results.”
- What it explains · Artifice’s feasibility studies, technical designs, working prototypes, tests, and deployment notes in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a brass prototype clamped in a simple stone test rig in the Circle of Artifice’s Warren workshop. Center the assembly so it fills about half the wide 16:9 frame and rests on a bare wooden bench. Show one exposed gear seated in the prototype and a small test gauge with faint dial marks on the rig. Lay one wordless sketch of the prototype flat beside it. Let soft arcane violet glow from the gear and one off-frame lantern cast gold across a single stone wall that fades into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A brass prototype with one exposed gear sits in a stone rig with a gauge, beside a sketch on the bench.
- On-page caption · Artifice designs, prototypes, and tests technology.

### circles/chronomancy

- Asset ID · circles/chronomancy
- Page and position · /circles/ in the Chronomancy card and /circles/chronomancy/ beside “Typical results.”
- What it explains · Chronomancy’s dependency maps, execution plans, and workflow specifications in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a brass clockwork latch where two tracks meet in the Circle of Chronomancy’s Warren workshop. Center the mechanism on a plain work surface so it fills about half the wide 16:9 frame. Show one shuttle already seated and another approaching, with the onward track held shut until both arrive. Give the shared latch a soft arcane violet glow and let one off-frame lantern trace the brass in gold. Suggest the chamber with a single softly lit stone wall that recedes into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · One brass shuttle rests in a clockwork latch and another approaches while the onward track stays closed.
- On-page caption · Chronomancy maps dependencies and handoffs.

### circles/commerce

- Asset ID · circles/commerce
- Page and position · /circles/ in the Commerce card and /circles/commerce/ beside “Typical results.”
- What it explains · Commerce’s unit economics, sales plans, and customer insight briefs in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a brass balance in the Circle of Commerce’s Warren appraisal hall. Center the scale and its pans so they fill about half the wide 16:9 frame. Place a piece of raw material in one pan and a trade token in the other, with one blank order slip below the balance. Give the trade pan a soft arcane violet glow and let one off-frame lantern cast gold on the brass. Suggest the hall with one softly lit stone arch fading into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A brass balance weighs raw material against a trade token, with one blank order slip below it.
- On-page caption · Commerce studies business value and customer needs.

### circles/divination

- Asset ID · circles/divination
- Page and position · /circles/ in the Divination card and /circles/divination/ beside “Typical results.”
- What it explains · Divination’s evidence briefs, analysis reports, and uncertainty assessments in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint an adjustable brass lens in the Circle of Divination’s Warren chamber. Center the lens and its narrow beam on a plain stone surface so the comparison fills about half the wide 16:9 frame. Place two mineral fragments under the lens so their soft arcane violet beams overlap in one sharply bounded band on the stone. Let one off-frame lantern bring gold to the edge of the lens. A softly lit stone wall fades into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A brass lens compares two mineral fragments, whose beams overlap in a narrow violet band.
- On-page caption · Divination weighs evidence and states uncertainty.

### circles/enchantment

- Asset ID · circles/enchantment
- Page and position · /circles/ in the Enchantment card and /circles/enchantment/ beside “Typical results.”
- What it explains · Enchantment’s campaign briefs, channel strategies, and editorial calendars in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a brass lantern fitted with a lens wheel in the Circle of Enchantment’s Warren workshop. Center the lantern and its beams so they fill about half the wide 16:9 frame. Let two different lenses shape its lantern-gold light into distinct beams with faint arcane violet edges. Fit one small timing dial to the wheel, with a few subtle marks to suggest when each beam is sent. Catch the beams on a single stone wall and let the rest fall into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A brass lantern uses two lenses to shape distinct beams, with a timing dial set into the lens wheel.
- On-page caption · Enchantment plans campaigns, channels, and editorial work.

### circles/illusion

- Asset ID · circles/illusion
- Page and position · /circles/ in the Illusion card and /circles/illusion/ beside “Typical results.”
- What it explains · Illusion’s creative direction, production-ready assets, and visual specifications in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint a cut-crystal prism casting an image onto a single silk hanging in the Circle of Illusion’s Warren atelier. Center the prism and its projection as one composition filling about half the wide 16:9 frame. Pass light from one off-frame lantern through the prism so a lantern-gold seed outline unfolds into an arcane violet tree silhouette on the silk. Keep the outlines crisp and the silk folds broad. Suggest the atelier with a single softly lit stone wall fading into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A crystal prism projects a seed unfolding into a tree silhouette on a single silk hanging.
- On-page caption · Illusion gives ideas visual and narrative form.

### circles/lore

- Asset ID · circles/lore
- Page and position · /circles/ in the Lore card and /circles/lore/ beside “Typical results.”
- What it explains · Lore’s knowledge briefs, decision records, and memory reviews in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 16:9
- Labels · None
- Prompt · Paint one open folio on a plain wooden lectern in the Circle of Lore’s Warren archive. Center the folio so it fills about half the wide 16:9 frame. Let a single arcane violet thread draw one blank source leaf into the binding beside a plain wax decision seal. Use one off-frame lantern to warm the exposed paper and wood to gold. Suggest the archive with one softly lit stone wall and leave the rest in open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A violet thread draws a single source leaf into an open folio beside a wax decision seal.
- On-page caption · Lore turns experience into durable knowledge.

### scenes/warren-hero

- Asset ID · scenes/warren-hero
- Page and position · /, in the hero figure beside the landing-page introduction.
- What it explains · The blueprint in app/page.tsx for human direction, specialized Circles, and reviewable evidence, the connected-paths symbol in content/handbook/guide.mdx, and the nine Circles in site/content.json.
- Style family · Painted fantasy scene
- Aspect ratio · 1:1, later center-cropped to 6:5
- Labels · None
- Prompt · Paint a great guiding lantern at the heart of the Arcane Warren. Make it the central subject, filling about half a square frame with the meaningful details inside the later 6:5 crop. Begin the lantern-gold path at one compass marker and let the lantern fan its light toward nine simple workshop openings set into one curved stone wall. Carry one blank evidence folio back toward the foreground along a soft arcane violet path. Let the chamber fall away around the lantern into open plum-black shadow. Keep the scene wordless and unpeopled.
- Alt text · A central lantern guides gold paths from a compass to nine workshop openings, while a blank folio returns along a violet path.
- On-page caption · A human goal guides specialized Circles, and their evidence comes back for review.
