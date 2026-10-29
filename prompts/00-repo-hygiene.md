# Task: repository hygiene

Goal: make the scaffold consistent without changing runtime security behavior.

- Inspect the tree and remove stale/duplicate files only after documenting them.
- Keep `worker.js` as the Wrangler entry until replacement has complete tests and explicit review.
- Add scripts only for checks that actually work; do not add a deployment script.
- Keep secrets out of Git; `.dev.vars` is ignored.
- Verify README clearly says scaffold/not production and notes the original implementation was not supplied.

Acceptance: clean tree, `npm test` green, no secrets, no deploy workflow.
