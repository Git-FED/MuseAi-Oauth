const randomBase64Url = (bytes = 32) => {
  const data = crypto.getRandomValues(new Uint8Array(bytes));
  let binary = '';
  for (const byte of data) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const sha256Base64Url = async (value) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  let binary = '';
  for (const byte of new Uint8Array(digest)) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

/**
 * Begin an OAuth authorization-code flow using PKCE S256.
 * This is a client-side example only. The issuer must implement OAuth endpoints,
 * the client/redirect URI must be registered, and the callback must validate state.
 */
export async function startMuseLogin({ issuer, clientId, redirectUri, scope = 'openid profile' }) {
  if (!issuer || !clientId || !redirectUri) throw new TypeError('issuer, clientId, and redirectUri are required');
  if (/YOUR-|example\.com|placeholder/i.test(`${issuer} ${clientId}`)) {
    throw new Error('Replace the example issuer and client ID before starting sign-in.');
  }
  const issuerUrl = new URL(issuer);
  if (issuerUrl.protocol !== 'https:' && issuerUrl.hostname !== 'localhost') {
    throw new Error('The MuseAI issuer must use HTTPS (localhost is allowed for local development).');
  }
  const callbackUrl = new URL(redirectUri);
  if (callbackUrl.origin !== window.location.origin) {
    throw new Error('This browser example requires a same-origin callback so state and PKCE verifier remain available.');
  }

  const verifier = randomBase64Url(48);
  const state = randomBase64Url(32);
  const nonce = randomBase64Url(32);
  const challenge = await sha256Base64Url(verifier);
  sessionStorage.setItem('museai.oauth.transaction', JSON.stringify({ verifier, state, nonce, redirectUri: callbackUrl.href }));

  const authorizationUrl = new URL('/oauth/authorize', issuerUrl);
  authorizationUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: callbackUrl.href,
    response_type: 'code',
    scope,
    state,
    nonce,
    code_challenge: challenge,
    code_challenge_method: 'S256',
  }).toString();
  window.location.assign(authorizationUrl.href);
}
