# IEEE CIS FutureTech 2026

Landing page for IEEE CIS FUTURETECH 2026 (20–22 Nov 2026, VIT Pune, India).

## Files

- `index.html` — page markup and content
- `style.css` — global styles (resets, base typography, keyframe animations)
- `support.js` — self-contained runtime: loads React/ReactDOM/Babel from a CDN and renders the page. No build step needed.

## Run locally

Requires a static file server (the page loads scripts by URL, so `file://` won't work).

```
npx serve .
```

or

```
python -m http.server 8000
```

Then open the printed local URL in a browser.

## Deploy to Netlify

This is a static site — no build command needed.

1. Push this folder to a Git repo (or drag-and-drop the folder into Netlify's dashboard).
2. In Netlify: **New site from Git** → select the repo.
3. Build settings: leave **Build command** empty, set **Publish directory** to `.` (already configured in `netlify.toml`).
4. Deploy.
