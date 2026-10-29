# Task: resolve token-version vs refresh lifetime

A daily `token_version` bump invalidates access AND refresh tokens, so a nominal 30-day refresh token may last less than a day. This is global logout, not signing-key rotation. Choose and document one model: (A) remove routine cron invalidation; retain a manual global kill switch and 30-day refresh lifetime, or (B) rotate actual OIDC signing keys with `kid` overlap while opaque access/refresh tokens remain valid. Do not mix these models.

Update docs and tests to prove actual behavior equals documented lifetime. No deploy.
