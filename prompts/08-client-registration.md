# Task: admin-only client registration

Keep open/dynamic registration disabled. Add a documented admin-reviewed process or guarded admin route disabled unless a secret is configured. Validate client ID/name, redirect URIs (HTTPS in production; localhost exception only in dev), no wildcard/fragment, exact-match checks. If confidential clients are added, store only a secret hash and require client authentication. Never commit admin token.

Tests: unauthenticated admin request, invalid redirect, exact match, localhost policy. No deploy.
