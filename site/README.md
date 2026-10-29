# MuseAI sign-in demo site

`index.html` is a static sign-in landing page; `embed-demo.html` provides a copyable authorization-code + PKCE S256 client example. The browser helper at `assets/museai-login.js` builds the request, but this repository's OAuth Worker is a deliberate 503 placeholder. No MuseAI account login is live.

Serve the directory with `python3 -m http.server 8000 --directory site`. The login button opens an explicit static status page rather than pretending to authenticate. Use `callback-example.html` for security guidance.

The legacy community and age-gated payment pages remain in the site, but the primary navigation and homepage are focused on MuseAI sign-in. The age checkbox is self-attestation only.
