# Migrations

No database migration is active. Durable Object or D1 state for atomic authorization-code, device, refresh-token, and pending-approval transitions is a production prerequisite. Do not substitute eventual-consistency KV operations for atomic consumption.
