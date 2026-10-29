# Task: pre-production security review

Review actual code and produce ranked findings (Critical/High/Medium/Low) with file and line references. Do not deploy. Verify: typed identity cannot reach tokens; signature/key ownership/canonicalization; nonce, expiry and replay; atomic consume; redirect allowlist; mandatory S256; token storage/refresh rotation; truthful OIDC claims; rate limits; enumeration; XSS/clickjacking; cache/CORS; secret handling; audit minimization; recovery/revocation.

Block any production-ready claim while Critical/High findings remain. Include explicit evidence and test references, not assumptions.
