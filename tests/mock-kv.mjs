// Minimal test double only. It is not a model of Cloudflare KV consistency or TTL.
export class MockKV {
  data = new Map();
  async get(key) { return this.data.get(key) ?? null; }
  async put(key, value) { this.data.set(key, String(value)); }
  async delete(key) { this.data.delete(key); }
}
