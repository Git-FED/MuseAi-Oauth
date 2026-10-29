# Task: atomic one-time state

Move authorization codes, device requests, pending approvals and refresh-token rotation to Durable Objects (or an equally transactional store). KV is eventually consistent and must not implement consume-once semantics. Define create/get/consume/approve/rotate operations with atomic state transitions. Keep client metadata and public keys in KV if appropriate. Add Wrangler bindings/migrations but do not execute deployment.

Add Promise.all double-spend tests proving exactly one code exchange/approval succeeds. Preserve device `authorization_pending` semantics. Document migration and rollback.
