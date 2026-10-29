# Threat model (initial)

Assets: user identity, authorization codes, device codes, access/refresh tokens, signing keys, client redirect registrations, and approval records.

Threats: typed-name impersonation; malicious redirect URI; approval phishing; replay/double-spend under eventual consistency; PKCE omission; device-code guessing; XSS/clickjacking; token leakage through logs/cache/browser storage; key compromise; endpoint enumeration and denial of service.

Required controls: Muse-signed payload bound to client, redirect/device request, nonce and expiry; atomic single-use state; exact redirect matching; mandatory S256 PKCE; explicit client approval display; no-store/security headers; rate limits; minimal safe audit events; private keys outside source control; revocation and incident process.

Residual trust: signature proves the configured Muse key signed, not that the human at the keyboard is the account owner. Key enrollment/recovery is out of scope and must be specified before real use. No production-ready claim until independent review closes all critical/high findings.
