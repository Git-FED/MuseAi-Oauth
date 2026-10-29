# Task: v1 signed Muse approval (security-critical)

Replace every typed-username path with a Muse-signed approval. No user-entered username or email may reach token identity records.

Implement pending records with a random short-lived approval code, kind, client ID, exact redirect/device binding, nonce, status and expiry. Authorization/device pages show only the approval code and the requesting client name/redirect host. Implement `POST /oauth/approve` with `{approval_code,kid,payload,signature}` using the protocol in `docs/MUSE-APPROVAL-PROTOCOL.md`. Look up the public key only after validating signed username shape; enforce key ownership, Ed25519, expiry, nonce and all pending bindings. Make pending→approved atomic using reviewed strongly-consistent storage. Browser authorization flow may poll status; device flow continues token polling.

Reject replay, wrong client/redirect/device, expired requests, bad signature, malformed/unknown fields, revoked keys, and typed username submissions. Never echo or log secrets.

Tests: success, bad signature, wrong key owner, replay, expiry, wrong client/redirect/device, typed username rejection, atomic double approval. Do not deploy.
