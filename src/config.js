export function getConfig(env) { if (!env?.OAUTH_KV) throw new Error("OAUTH_KV missing"); return { issuer: env.ISSUER ?? null }; }
