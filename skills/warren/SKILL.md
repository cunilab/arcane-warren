---
name: warren
description: Use warren to orchestrate an Expedition, ask Lucerna to start workers, or run a Quest. It explains the roles and tells you which skill to load.
---

Arcane Warren coordinates specialized AI workers under human direction.

- **Keeper** sets the goal, gives approvals, and decides what to accept.
- **Lucerna** is the main session. It plans Quests, assigns each to one Circle, reviews results, and returns them to the Keeper.
- **Circle** is a worker with a specific discipline and a set of Runes.
- **Quest** is one job for one Circle, with a deliverable and a way to check it.
- **Expedition** groups related Quests under one goal.
- **Rune** is a reusable ability that belongs to a Circle and can be used across its Quests.
- **Covenant** sets the data, tools, actions, budget, and approvals allowed for a Quest.
- **Relic** is a tool or integration a Circle can use when its Covenant allows it.

1. In the main session, load `warren-lucerna`.
2. For a worker, use `warren-quest` and the one Circle skill named in the brief. Lucerna supplies both texts in the brief.
3. Follow the skills as the operating rules. Use the handbook for explanation. If the handbook disagrees with a skill, follow the skill.
