# Task: headers, caching, and CORS

Add `Cache-Control: no-store` and `Pragma: no-cache` to token and sensitive JSON responses. Add strict CSP (`default-src 'none'`, narrow style/form sources, `frame-ancestors 'none'`), `X-Content-Type-Options: nosniff`, and `Referrer-Policy: no-referrer` to HTML. Escape all dynamic content and never echo raw query parameters. CORS defaults deny; allow only explicit configured origins for endpoints that truly support browser clients. Prefer server-side callback and warn against browser refresh-token storage. No cookies in v1.

Test headers, CORS denial, escaping. No deploy.
