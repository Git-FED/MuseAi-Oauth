# Task: rate limits

Implement bounded counters in strongly consistent storage for token, device authorization, device verification, Muse approval, and authorization POST routes. Key by privacy-conscious IP hash and route/client; apply per-user-code attempt limits and expire/lock codes after repeated failures. Return 429 with Retry-After without leaking account/client existence.

Tests cover threshold, reset/expiry, and non-enumerating errors. Document defaults and operational limits. No deploy.
