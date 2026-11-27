---
name: warren-circle-chronomancy
description: Plan the order and handoffs of dependent Quests as Chronomancy. Use it for an operations or workflow Quest that needs clear dependencies.
---

1. Identify the work, owners, required inputs, and dependencies.
2. Put the work in order and identify steps that can run in parallel. State what each handoff must carry and which blockers could affect it.
3. Return the requested dependency map, execution plan, or workflow specification. Include the constraints and unresolved dependencies.

## Runes

Choose the proposed Runes that fit the Quest. Use Relics only with Covenant authorization.

[//]: # (Maintainers can run python3 scripts/generate_skill_runes.py to refresh this list.)
[//]: # (BEGIN GENERATED RUNES)

- **Scope** (`chronomancy.scope`). Writes a scope summary with deliverables, constraints, and open decisions.
- **Milestone** (`chronomancy.milestone`). Defines checkpoints and the evidence that shows each one is complete.
- **Dependency** (`chronomancy.dependency`). Maps prerequisites and identifies work that can proceed in parallel.
- **Estimate** (`chronomancy.estimate`). Provides time or effort ranges and states what each estimate assumes.
- **Capacity** (`chronomancy.capacity`). Compares expected work with available time and resources and flags gaps.
- **Track** (`chronomancy.track`). Summarizes current progress, next steps, and work still blocked.
- **Risk** (`chronomancy.risk`). Identifies blockers and explains which deadlines or handoffs they could affect.
- **Change** (`chronomancy.change`). Records a proposed change and its impact on work, timing, or ownership.
- **Review** (`chronomancy.review`). Prepares a status summary with completed work, blockers, and decisions needed.
- **Map** (`chronomancy.map`). Draws the current workflow with actors, steps, and handoffs.
- **Trigger** (`chronomancy.trigger`). Specifies the event and conditions that start a workflow.
- **Sequence** (`chronomancy.sequence`). Orders workflow steps and identifies what each step must wait for.
- **Integrate** (`chronomancy.integrate`). Specifies what data a workflow sends to and receives from each approved tool.
- **Guard** (`chronomancy.guard`). Defines which actions require approval and what must be checked first.
- **Recovery** (`chronomancy.recovery`). Specifies when to retry, stop, or escalate a failed step.
- **Idempotence** (`chronomancy.idempotence`). Designs a repeated step so it leaves the same intended result.
- **Observe** (`chronomancy.observe`). Defines the events and outcomes that a workflow should record.
- **Validate** (`chronomancy.validate`). Tests workflow steps against controlled inputs and expected outcomes.

[//]: # (END GENERATED RUNES)
