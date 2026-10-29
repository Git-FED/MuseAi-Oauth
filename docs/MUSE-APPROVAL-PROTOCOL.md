# Muse Approval Protocol — v1 design

Status: specification only; no deployment or live keys. Human login only.

## Purpose and flow

A typed username must never become a token identity. The only approved username comes from a Muse-signed payload whose public key is registered to that username. The server binds that payload to a single short-lived pending authorization or device request.

1. Server validates client, exact redirect URI and PKCE; creates a pending record with random approval code, nonce, request kind, client ID, redirect/device binding, status and expiry.
2. Page shows approval code, client name and redirect host; no username/email input.
3. User pastes code into their own Muse. Muse confirms the client and signs the protocol payload.
4. Muse POSTs `{approval_code, kid, payload, signature}` to `/oauth/approve`.
5. Server validates shape, expiry, binding, key ownership, signature, and atomically changes pending from pending to approved once.
6. Browser polls approval status for authorization flow; device client continues token polling.

## Canonical signed payload

Required fields: `v` integer 1, `approval_code`, `kind` (`authorize` or `device`), `client_id`, `nonce`, `username`, `iat`, `exp`; exactly one of `redirect_uri` (authorize) or `device_code` (device). Username is 1–64 characters matching `[A-Za-z0-9._-]`. `exp - iat` must be at most 300 seconds; reject future `iat` beyond 60 seconds clock skew.

Canonicalization: UTF-8 JSON, recursively lexicographically sorted keys, no insignificant whitespace or trailing newline, RFC 8259 string escaping, integer numbers only. Reject unknown/duplicate fields and reconstruct canonical JSON from parsed fields; never verify a caller-supplied serialized string. Signature is base64url of a 64-byte Ed25519 signature over canonical payload bytes. `kid` is outside the signed payload (Option A) to select a candidate key, but key record username must match signed payload username.

Key record: `musekey:<username>:<kid>` → `{username,kid,alg:"Ed25519",public_key_b64url,created_at,revoked}`. Registration is admin-only; no dynamic key enrollment endpoint.

## Verification, failure, and replay

Require pending record exists, is unexpired and pending; all payload fields exactly match pending bindings; key exists, is active Ed25519 and belongs to username; signature verifies; approval transition is atomic. Any failure rejects closed. Do not echo signatures, keys, usernames, or distinguish unknown/expired/bad-signature cases to unauthenticated callers. Never log payloads or codes. A second approval is rejected and never overwrites identity.

KV alone is not adequate for atomic consume-once transitions. Use Durable Objects or transactional storage. This protocol proves that a configured Muse key signed; it does not prove the physical human at the keyboard is the owner.
