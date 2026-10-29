# Deployment notes — intentionally blocked

**Do not deploy this scaffold.** `worker.js` returns 503 and is not an OAuth implementation. These are planning notes only.

When a separately authorized implementation is production-reviewed: create a new KV namespace (`wrangler kv namespace create OAUTH_KV`), configure its ID, attach a custom domain and set `ISSUER`, install atomic state storage, register clients through the reviewed admin process, and run all security tests. Never place secrets in `wrangler.toml`; never run deployment from CI. Deployment requires explicit human authorization and a separate release checklist.
