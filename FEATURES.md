# FEATURES.md — IEEE CIS FutureTech 2026

## What this is

A single-page marketing/landing site for a fictional IEEE Computational Intelligence Society conference (20–22 Nov 2026, VIT Pune, India). All speakers, sponsors and figures are demo content.

## How it actually runs (implementation)

- **`index.html`** — page content, written as a custom template: a `<x-dc>` block containing plain HTML plus a small templating DSL (`{{ expr }}` bindings, `<sc-if>` conditionals, `<sc-for>` loops) and a `<script data-dc-script>` block holding a `Component extends DCLogic` class (state + event handlers, e.g. `openSpeaker`, `toggleFaq`, `setDay`, `onSearch`).
- **`support.js`** — a small runtime ("dc-runtime") that, on page load:
  1. Loads **React 18** and **Babel Standalone** from a CDN (unpkg) at runtime — no local build step.
  2. Parses the `<x-dc>` template and the `data-dc-script` class into a React component tree.
  3. Mounts and re-renders it on state changes, boots automatically on `DOMContentLoaded`.
- **`style.css`** — global CSS: box-sizing reset, base typography, scrollbar styling, focus/selection states, and the keyframe animations (pulse, marquee, scan, float, fade-up) used across the page. Everything component-specific stays as inline `style=` attributes in `index.html`.
- **Fonts**: Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`), loaded via `<link>` in the page head.
- **Canvas 2D**: a hand-rolled particle/"neural core" visualization on `<canvas>` (no WebGL, no 3D library) — cheap enough to run on low-end devices.

There's no bundler, package.json, or build step — the three files are the entire deployable site.

> Note: the page's own "Architecture" section lists a fictional stack (React 18, TypeScript, Vite, Tailwind, GSAP) as **marketing copy describing how a real conference team might build this** — that's page content, not the actual implementation described above.

## Sections (in scroll order)

1. **Hero** — animated canvas backdrop, headline, date/location/format, primary CTA.
2. **Live status bar** — live dot, countdown timer to the event start, "simulate event day" and "watch live" actions.
3. **About** — mission copy, three pillars (research/industry/community), "why attend" list, CFP deadline.
4. **Stats** — animated count-up figures (researchers, speakers, countries, sessions).
5. **Architecture** — 8-step "conference experience" module map.
6. **Technology** — fictional tech-stack cards (see note above).
7. **Tracks** — horizontally scrollable/swipeable rail of 6 research tracks with per-track topics and session counts.
8. **Speakers** — grid of 8 speaker cards, each opening a detail modal (bio, org, research interests, links).
9. **Schedule** — day tabs (3 days), a vertical timeline of sessions per day, per-session "save to agenda" toggle.
10. **Venue** — interactive zone map (hover/tap a zone to see capacity + description), access/support notes.
11. **IEEE CIS** — background on the sponsoring society, founding year, country/committee counts.
12. **Sponsors** — tiered sponsor logos plus an auto-scrolling marquee of community partners (pauses on hover).
13. **Registration** — pricing plan cards (student/academic/industry/group), "select pass" action.
14. **FAQ** — accordion of common questions.
15. **CTA** — closing call-to-action banner.
16. **Footer** — quick links, contact info, social links, legal.

## Interactive / UX features

- **Command-style search** (press `/`) — searches speakers, sessions, tracks and venue zones, jumps to a result.
- **Keyboard shortcuts panel** (press `?`) — lists shortcuts (`/` search, `?` this panel, `B` blueprint overlay, `Esc` close, `Tab` navigate).
- **Blueprint overlay** (press `B`) — reveals section-boundary labels (`SEC/01`, `SEC/02`, …) for layout inspection.
- **Custom cursor** — a ring + dot that follows the pointer and relabels itself contextually (`VIEW`, `JOIN`, `SEARCH`, `SCROLL`, `ZONE`, `SELECT`) on desktop; disabled on touch.
- **Magnetic buttons** — primary CTAs pull slightly toward the cursor on hover.
- **Scroll-driven effects** — one shared animation loop drives the hero parallax, a progress bar in the top nav, and section-reveal-on-scroll (`data-reveal` elements fade/slide in once, then stop observing).
- **Mobile navigation** — full-screen menu with numbered links, replacing the desktop nav under 1024px.
- **Toast notifications** — bottom-of-screen confirmations for actions like saving a session.
- **Session bookmarking** — "save" a schedule session; a running count shows in the schedule header.
- **FAQ accordion**, **day-tab switching**, **venue-zone switching**, **speaker modal** — all local component state, no page reloads.
- **Live simulation controls** — buttons to simulate "event day" state and a "watch live" placeholder action.

## Accessibility

- Skip-to-content link, single `<h1>`, ordered heading levels, semantic landmarks (`header`, `main`, `nav`, `footer`).
- Visible focus rings (`:focus-visible`), 44px minimum touch targets, `aria-expanded`/`aria-modal`/`aria-live` used on interactive widgets.
- `prefers-reduced-motion` support — collapses all animation/transition durations to near-zero.
- Reduced-motion and mobile fallbacks skip the custom cursor and heavier canvas work.

## Performance notes (as documented in the page copy)

- A single `requestAnimationFrame` loop drives all scroll-linked effects, rather than one listener per effect.
- Canvas rendering pauses when off-screen; animated properties are limited to `transform`/`opacity`.
- Scroll-reveal observers detach after firing once per element.
