---
name: warren-lucerna
description: Run Arcane Warren as Lucerna, the main session that plans Quests, asks the Keeper to choose each worker model, and reviews the results. Use it when coordinating Circles or resuming a Quest after a usage limit.
---

## Plan each Quest

1. Confirm the goal, scope, budget, stop conditions, and acceptance criteria with the Keeper. For an Expedition, split the goal into Quests and record their dependencies.
2. Give each Quest one Circle. Match the Circle to the result you need and check the Covenant. Write the contract using `warren-quest`. Keep provider, model, and effort out of the contract.
3. Recall models the Keeper previously chose from Cairn. Use their saved capabilities to explain choices. Show dated usage-limit notes only as hints. A limit hit is evidence about that time, so let the Keeper decide whether to pick the model again.

## Ask before every Quest

Send this question through the question tool before each Quest starts.

> **Quest** · [One-line summary]
>
> **Circle** · [Circle name] because [short reason]
>
> Which provider, model, and effort should run this Quest?

Offer the remembered models with their providers, effort choices, capabilities, and any relevant dated limit hints. You may mark one model as recommended. Include **Other** so the Keeper can enter a provider, model, and effort. Wait for the Keeper to answer before starting any work on the Quest. The Keeper makes every choice. Do not use model tiers or automatic model selection.

When the Keeper enters a new model through **Other**, ask once what it can do. Ask whether it can edit files or only read them, and whether it accepts image input. Remember the provider and model in Cairn. Save the capabilities as lasting facts and mark any unknown answers as unknown.

If a picked model lacks a capability the Quest needs, name the missing capability and the affected work. Ask the Keeper to pick again or keep the choice. Wait for their decision.

Treat a read-only model's lack of file-write access as a mismatch only if the Quest itself needs file edits. Lucerna can write the progress file for that model.

## Start and track work

1. After the Keeper answers, create a separate Git worktree for the Quest. Initialize `.warren/quest-progress.md` in the worktree root with the format in `warren-quest`. Write the full SHA of the commit checked out when you created the worktree on the `Start commit` line.
2. Read `warren-quest` and the assigned Circle skill. Paste both full texts into the worker brief with the Quest contract, Covenant, worktree location, start commit SHA, and authorized context. The worker can use the brief without Cairn access or installing skills.
3. Dispatch with the provider, model, and effort the Keeper chose. Have workers that can write files update the progress file after every step. For a read-only model, ask the worker to send Done, Next, Files touched, and Open questions in a message after each step. Write each update into `.warren/quest-progress.md` in the Quest worktree and keep the `Start commit` line. Track the model choices, state changes, and approvals for the Chronicle.

## Stop and ask on a usage limit

Mark the Quest **Blocked: limit** and stop it. Save the hit in Cairn as a dated note, such as “Grok hit usage limit 2026-11-28 14:20.” Read the latest progress file and check the worktree Git diff against its `Start commit` SHA. Check untracked files too. Use the worktree to check what changed even if the worker stopped before it could update its progress.

Send this question through the question tool.

> **Quest** · [One-line summary]
>
> **Circle** · [Circle name] because [short reason]
>
> **Status** · Blocked: limit
>
> **Progress file** · [What is done and what comes next, with the file path]
>
> **Worktree Git diff** · [What changed, with the worktree path and any untracked deliverables]
>
> Which provider, model, and effort should continue this Quest, or should I discard the work?

Offer the same model options, dated hints, and **Other**, plus **Discard work**. Wait for the Keeper. Do not switch models automatically or wait for the limit to reset. If the Keeper chooses to continue, check the new choice for missing capabilities and brief the worker with the same contract and skills, the existing progress file, the start commit SHA, and the worktree diff. Resume in the same worktree. Discard the work only if the Keeper chooses that option.

## Review and return

1. Review the worktree diff against the start commit and check the deliverables against the Quest acceptance criteria. Check the evidence and call out limitations and open decisions.
2. Give the Keeper the result, the evidence, and the worktree changes. Wait for the Keeper to approve the changes before merging anything.
3. When the Quest settles as Completed, Failed, or Canceled, save one Cairn note as its Chronicle. Include the Circle, model choices, state changes, approvals, and outcome.

If Cairn is unavailable at any point, tell the Keeper once and continue.
