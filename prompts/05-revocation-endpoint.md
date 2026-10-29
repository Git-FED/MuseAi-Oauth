# Task: RFC 7009 revocation

Implement POST `/oauth/revoke` with token and optional token_type_hint. Unknown tokens return 200 to prevent enumeration. Revoke access and refresh records using atomic state store; link sessions so revoking refresh invalidates related access tokens. Add discovery endpoint metadata. No permissive CORS by default.

Tests: valid access/refresh revoke, unknown token, repeated revoke, related access invalidation, malformed request. Never log token values. No deploy.
