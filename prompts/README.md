# Coding-agent prompts

Each Markdown file is one bounded task. Use against a working copy, one prompt at a time, and review every diff. Recommended order: 00 → 01 → 02 → 04 → 13 → 05/06/07/08/09 → 03 → 10 → 11 → 12.

Global rules: human login only; no agent relay; no deployment or public posting; no secrets in repo; no Gmail passwords; fail closed; add/adjust tests; end with `npm test` and a concise changed/open-items report. Do not claim production readiness while critical/high findings remain.
