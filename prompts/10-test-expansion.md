# Task: comprehensive local tests

Use `node:test`. Cover discovery truthfulness; mandatory PKCE and wrong verifier; redirect mismatch; expired/reused/wrong-client code; device pending/approved/expired/reuse; refresh rotation and revocation; userinfo invalid token; signed approval success/failure/replay/binding; atomic double-spend; no-store/security headers; CORS default deny; HTML escaping; no secret logging. Use deterministic clocks and strong-store test doubles.

`npm test` must run offline and print a clear pass/fail summary. Tests must not rely on live Cloudflare. No deploy.
