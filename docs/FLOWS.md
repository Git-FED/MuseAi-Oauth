# Flows (design)

## Authorization code + PKCE

Client creates verifier/challenge (S256) → `/oauth/authorize` validates exact redirect URI and client → server creates short-lived pending approval → page shows client name/redirect host and an approval code → user submits code to their own Muse → Muse signs a bound payload → server verifies key, signature, nonce, expiry and atomic single-use transition → browser polls status → server redirects with code/state → client exchanges code with verifier.

## Device authorization

Client requests device code → displays user code → user opens verification page and enters it → page shows client identity and instructs user to approve via Muse → Muse signs a payload bound to that device request → app polls token endpoint; pending/slow_down/approved/expired responses must be implemented and rate-limited.

No typed username is an identity assertion. All flows are design-only in this scaffold.
