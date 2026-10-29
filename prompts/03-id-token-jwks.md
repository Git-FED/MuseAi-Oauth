# Task: truthful OIDC support

Either implement OIDC completely or de-scope it. Preferred implementation: private signing key only in secret storage; stable `kid`; JWKS endpoint; discovery `jwks_uri`; ID token on supported grants with correct `iss/sub/aud/exp/iat/nonce`; persist and validate nonce; publish public keys and support overlap rotation. Keep access tokens opaque. Include email only with truthful `email_verified:false` unless independently attested.

If safe signing/key management cannot be completed, remove `openid` claims from discovery and document OAuth 2.0 + userinfo instead. Add verification tests using JWKS and exact issuer/audience/nonce. No deployment.
