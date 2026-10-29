// KV helpers are for non-atomic data only. Do not use KV for one-time consumption.
export function notImplemented() { throw new Error("KV helpers not implemented"); }
