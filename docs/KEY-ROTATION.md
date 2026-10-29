# Key rotation and global revocation

Do not conflate token-version invalidation with signing-key rotation. A daily version bump invalidates every access and refresh token at the next cron and defeats a 30-day refresh lifetime.

Recommended decision: keep a manual global kill switch for incident response; do not run it on a routine cron. If OIDC ID tokens are implemented, rotate signing keys with `kid` and overlap: publish old and new public keys, sign with new key, retain old verification key until tokens signed by it have expired plus clock skew. Document the exact overlap and test it. Muse approval public-key rotation is separate and must honor key revocation policy.
