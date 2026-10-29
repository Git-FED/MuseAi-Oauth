# Task: safe audit events

Add structured, minimal events for authorization creation, approval success/failure, token issue/reject, device lifecycle, revoke, and key/kill-switch actions. Fields may include timestamp, event, client ID, username only after verified approval, IP hash, outcome and coarse reason. Never log tokens, codes, verifiers, signatures, raw payloads, or full email. Use a rotating IP-hash salt held outside source control; define retention and access policy.

Tests assert secret substrings never appear. No deploy.
