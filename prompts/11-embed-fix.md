# Task: repair the embed example

Fix HTML comments so no instruction text or stray `-->` is rendered. Keep only explicit issuer/client/callback placeholders; exact redirect URI registration must be explained. Validate state on callback and use PKCE. Prefer a server-side callback; never expose refresh tokens in localStorage. Mark the example prototype-only until signed Muse approval is implemented. No third-party scripts or inline secrets.

Add a simple render/markup test if practical. No deploy.
