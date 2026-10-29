# Task: implement and review Muse approval protocol

Implement `docs/MUSE-APPROVAL-PROTOCOL.md` exactly. Confirm canonicalization details with independent test vectors before enabling verification. Use WebCrypto Ed25519, base64url decoding with strict length checks, a known key record bound to signed username, exp/iat checks, and atomic one-time approval. Reject unknown fields and ambiguous JSON. Do not invent Muse session claims or key-enrollment behavior; if the real Muse signing interface is unavailable, leave the route fail-closed and document the blocker.

Tests must include a known-good signed vector, modified payload, modified signature, revoked/foreign key, expired payload, nonce/client mismatch, replay, and malformed encodings. No deployment.
