# XYOVER Website Build

Production build artifacts for the XYOVER fragrance brand website.

- `client/` contains browser assets.
- `server/` contains the Cloudflare Worker-compatible server bundle.
- `.openai/hosting.json` contains the deployment manifest.

The editable source code is maintained separately in the private `xyover_web` repository.

## Cloudflare deployment

This repository contains a prebuilt Cloudflare Worker and its static assets. Cloudflare Workers Builds can deploy it directly from `main` with no build command and the default deploy command, `npx wrangler deploy`.
