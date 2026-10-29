// No scheduled global invalidation. Implement signing-key overlap only if OIDC is enabled.
export async function rotate() { return { changed: false }; }
