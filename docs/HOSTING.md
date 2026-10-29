# Static site hosting

The static community site lives in `site/` and requires no build step.

## Cloudflare Pages (recommended static option)
Connect the GitHub repository in Cloudflare Pages. Set the build command to empty/no build and the output directory to `site`. Preview the generated Pages URL before attaching a domain. `site/_headers` is recognized by Pages for basic headers. The existing root `wrangler.toml` is for the separate OAuth scaffold, not the static site.

## GitHub Pages
Publish the `site/` directory with a Pages workflow/artifact, or copy its contents to the selected Pages source branch/folder. Relative HTML and asset links support a repository subpath. GitHub Pages may not apply Cloudflare-specific `_headers` files.

## Cloudflare Worker with static assets
This is a separate deployment model from Pages. Do not point the OAuth Worker configuration at the site or combine public static hosting with authentication endpoints without an explicit routing review. No deployment workflow is included.

No deployment has been performed. Payment provider embeds are present in `site/payments.html`; verify the supplied provider configuration and merchant account settings before publishing. The 18+ checkbox is an acknowledgment only, not formal age verification.
