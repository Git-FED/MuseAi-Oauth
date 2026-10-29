# Task: require PKCE S256

Require a non-empty `code_challenge` and `code_challenge_method=S256` on every authorization-code request. Reject `plain`, missing values, malformed verifier, missing verifier, and mismatch. Recheck at token exchange; never skip verification because a stored value is null. Device flow is separate and must not be altered. Use constant-time comparison where applicable.

Add positive and negative tests and confirm discovery advertises only supported methods. Do not weaken redirect URI exact matching. Do not deploy.
