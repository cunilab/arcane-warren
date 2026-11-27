---
name: warren-quest
description: Write or follow a Quest contract, keep progress in its worktree, and return evidence for review. Use it to brief a Circle, do its work, or resume an interrupted Quest.
---

## Quest contract

Fill in all four fields before dispatch. Keep provider, model, and effort out of the contract.

- **Intent** includes the objective, one Circle owner, scope, and acceptance criteria.
- **Inputs** include source references, dependency outputs, and any authorized memory supplied in the brief.
- **Execution** includes allowed tools and actions, the time or cost limit, and approval points from the Covenant.
- **Return** includes the deliverable, status, evidence, limitations, and decisions for review.

## Work in the Quest worktree

1. Use the Git worktree named in the brief. Follow the pasted Circle skill and Quest contract. Use only the data, tools, and actions allowed by the Covenant. Ask Lucerna when a required input, decision, or permission is missing.
2. After **every step**, report progress using the four headings below. If you can write files, update `.warren/quest-progress.md` in the worktree root. If you are read-only, send the update to Lucerna in a message so Lucerna can write it to the file. Keep updates short and send or save them as you go because a usage limit can stop you before a final note. Treat the file as a Quest record and leave it out of any proposed merge.

Keep the `Start commit` line in the progress file as Lucerna wrote it. Use these four headings in the progress file or message.

```markdown
# Quest progress

Start commit: <full commit SHA>

## Done
- Completed steps, with evidence.

## Next
- Next step or review still needed.

## Files touched
- Paths and what changed.

## Open questions
- Blockers, uncertainty, or decisions needed.
```

## Resume work

1. Use the same worktree and contract when Lucerna asks you to continue. Read the progress file. Use the start commit SHA from the brief or progress file to run `git diff <start-commit> --` in the worktree. Check untracked files too.
2. Verify what is already done against the current files and the acceptance criteria. Continue at the next unfinished step. If you need a decision or the evidence disagrees with the progress note, tell Lucerna before proceeding with the affected step.

## Return to Lucerna

Return the requested deliverable or its path, the Quest status, the evidence for each acceptance criterion, and any limitations or open decisions. Include checks you ran and what they showed. Point to the worktree and progress file so Lucerna can review the changes.
