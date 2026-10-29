// Route table placeholder. Unknown routes must return 404; wrong methods 405.
export function routeNotImplemented() { return new Response("Not implemented", { status: 503 }); }
