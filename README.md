# EdwonSite Mirror

This project is a local mirror/recreation of `https://www.edwon.tv` (focused on creations + work pages), built with Brunch static assets.

## Quick Start

```bash
npm install
npm start
```

Dev URL:

- `http://localhost:3333/`
- `http://localhost:3333/index.html`

## Build

```bash
npm run build
```

Build output folder (deploy this):

- `public/`

## Deploy

Upload everything inside:

- `public/`

to your web host root.

## Project Structure

- `app/assets/` source HTML/CSS/JS/assets used by Brunch
- `app/assets/works/` individual portfolio work pages
- `app/assets/mirror/` mirrored first-party CDN files used by pages
- `public/` final built and deploy-ready site

## Current Behavior Notes

- Homepage portfolio cards link to work detail pages under `/works/*.html`.
- Brunch server config uses `noPushState: true` in `brunch-config.js` to avoid route fallback to homepage.
- Wuboz work page gallery art is included in:
  - `app/assets/works/wuboz.html`
- Footer Instagram links point to:
  - `https://www.instagram.com/edwonedwon/`

## If You Resume This In Codex Later

1. Make edits in `app/assets/**`.
2. Run `npm run build` after each change.
3. If needed for root mirroring, sync built assets to root:
   ```bash
   rsync -a public/assets/ public/
   ```
4. Verify changed page directly in browser with hard refresh.
