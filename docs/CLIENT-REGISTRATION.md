# Client registration

No open/dynamic registration. Baseline is an administrator-reviewed record seeded out of band. Each client has a unique client ID, display name, and exact redirect URI allowlist. Reject wildcards, fragments, malformed URLs, and non-HTTPS production redirects (localhost may be allowed in development only). Display the registered client and redirect host during approval. Client secrets, if ever used for confidential clients, must be stored as hashes and supplied only through a secret manager.
