// Ed25519 approval verifier — deliberately fails closed until its protocol and tests land.
// Public keys only; private keys must never be committed.
export async function verifyApproval() {
  return { ok: false, reason: "verifier_not_implemented" };
}
