# Tech & Features — IEEE CIS FutureTech 2026

A plain-language walkthrough of what this site does and what makes it run. (For the terse checklist version, see `FEATURES.md`.)

## 1. The technology stack

### `index.html` — content + template
The page content isn't written as plain static HTML. It's authored as a small template language embedded inside one `<x-dc>` tag:

- **`{{ expression }}`** — a binding. Wherever you see `{{ speaker.name }}` in the file, that gets replaced at render time with live data from the page's state.
- **`<sc-for list="{{ speakers }}" as="sp">`** — a loop. It repeats the block inside it once per item in the `speakers` array (there are 8 speakers, so this prints 8 cards).
- **`<sc-if value="{{ menuOpen }}">`** — a conditional. The block inside only renders while `menuOpen` is true, e.g. the mobile nav only exists in the page while it's open.

At the bottom of `index.html` there's a `<script data-dc-script>` block containing a JavaScript class (`Component extends DCLogic`). This is the page's "brain" — it holds:
- **State**: `loading`, `menuOpen`, `searchOpen`, `day`, `saved`, `speakerIndex`, etc. — whatever can change while you use the page.
- **Data**: fixed arrays like `speakers`, `tracks`, `sessions`, `plans` — the actual conference content.
- **Actions**: functions like `openSpeaker`, `toggleFaq`, `setDay`, `onSearch` that update state when you click, type, or scroll.

### `support.js` — the runtime that makes it work
This is the engine, and it's the reason the two files above are enough on their own — no build tool required. When the page loads, `support.js`:

1. **Fetches React 18 and Babel Standalone from a CDN** (unpkg), directly in the browser. Babel is needed because the `Component` class in `index.html` isn't plain browser JavaScript on its own — Babel compiles it on the fly.
2. **Parses the `<x-dc>` template** — reads the `{{ }}`, `<sc-if>`, `<sc-for>` markup and turns it into a tree of React elements.
3. **Mounts the result into the page** and re-renders automatically whenever state changes (e.g. clicking a speaker card sets `speakerIndex`, which re-renders the modal into existence).

In short: this project ships its own tiny "compiler + framework" in one file, so the site works by opening three static files on any web server — no `npm install`, no build step, no bundler.

### `style.css` — the one real stylesheet
Nearly all visual styling in this project is written inline (`style="..."` on each element) — that's a deliberate choice of the dc-runtime authoring format, since colors/spacing are meant to be visually editable per-element. `style.css` holds only what has to live in a real stylesheet:
- CSS resets (`box-sizing`, margin/list resets)
- Global element defaults (links, buttons, focus rings, scrollbar look)
- `@keyframes` animations (`ftPulse`, `ftMarquee`, `ftScan`, `ftFloat`, `ftFadeUp`, etc.) — CSS animations can't be expressed as a one-off inline style, they need a named rule.
- The `prefers-reduced-motion` override that flattens every animation/transition to near-zero duration for users who've asked for less motion.

### Canvas 2D — the animated visuals
The hero background and the "neural core" graphic near the IEEE CIS section are drawn with the browser's built-in **Canvas 2D API** — plain JavaScript drawing calls (`ctx.arc`, `ctx.moveTo`, etc.), no 3D engine, no WebGL, no external graphics library. That keeps it fast on low-end phones, at the cost of it not being a "real" 3D visualization.

### Fonts
Three Google Fonts are loaded via a single `<link>` tag: **Space Grotesk** (headings), **Inter** (body text), **JetBrains Mono** (labels/UI chrome — the small all-caps tracked text throughout).

### Deployment tech
- **`netlify.toml`** tells Netlify this is a static site (`publish = "."`), with no build command — Netlify just serves the three files as-is.
- No server, no database, no API — every "action" on the page (search, saving a session, registering) only changes in-browser state; nothing is persisted or sent anywhere.

---

## 2. Features, explained

### Navigation & wayfinding
- **Sticky header** with a logo, desktop nav links, a search trigger, and a "Register" button; collapses into a full-screen mobile menu under 1024px width.
- **Command search (press `/`)** — a full-screen overlay with a live-filtering input. Typing searches across all speakers, sessions, tracks, and venue zones at once and shows which category each result came from; selecting one jumps straight to that section.
- **Keyboard shortcuts panel (press `?`)** — a small reference card listing every keyboard shortcut on the site, so power users don't have to hunt for the search icon or hover buttons.
- **Blueprint overlay (press `B`)** — toggles small labels (`SEC/01 · HOME`, `SEC/02 · ABOUT`, …) in the corner of each section. This is a design/QA aid for checking section boundaries, not something an end visitor needs.

### Motion & feel
- **Custom cursor** (desktop only) — replaces the OS pointer with a ring-and-dot pair that grows and relabels itself (`VIEW`, `JOIN`, `SEARCH`, `SCROLL`, `ZONE`, `SELECT`) depending on what it's hovering, giving hover states a distinct identity per element type.
- **Magnetic buttons** — the main call-to-action buttons shift slightly toward the mouse as it approaches, a small physical-feeling touch on the most important click targets.
- **Scroll-reveal** — content blocks (`data-reveal`) fade and slide into place the first time they scroll into view, then stop being tracked (so scrolling back up and down doesn't keep re-triggering it).
- **One shared animation loop** — rather than each animated element running its own timer, a single `requestAnimationFrame` loop updates the hero parallax, the top progress bar, and other scroll-tied effects together, which is both simpler to reason about and cheaper for the browser.
- **`prefers-reduced-motion` respected everywhere** — visitors who've turned off motion in their OS settings get instant state changes instead of animations.

### Content sections
- **Hero** — the event name, date, location, format, and the two primary actions (Register / Explore), over an animated canvas backdrop.
- **Live status bar** — a live countdown to the event start date, plus buttons to simulate what the page looks like on the actual event day and to jump into a (placeholder) live stream.
- **About** — why the conference exists, three pillars of what makes it different (peer review, industry input, community), and a short "why attend" list with the CFP deadline.
- **Stats** — four headline numbers (500+ researchers, 40+ speakers, 20+ countries, 30+ sessions) that count up when scrolled into view.
- **Architecture** — an 8-step map of "the conference experience" from home to registration, framed like a technical system diagram (each step has a code, name, and state).
- **Technology** *(page content, not the real build)* — a set of cards describing a fictional stack (React, TypeScript, Vite, Tailwind, GSAP, etc.) that a real team building this conference site might use. This is marketing copy inside the page, distinct from what actually renders the page (see Part 1 above).
- **Tracks** — a horizontally scrollable row of the 6 research tracks (AI, Robotics, Cybersecurity, Data & Decision Intelligence, Human-AI Interaction, Emerging Tech), each with a short description, sample topics, and session count. Works with mouse scroll or touch swipe, with a progress indicator underneath.
- **Speakers** — a grid of 8 speaker cards; clicking one opens a modal with their full bio, affiliation, research interests, and (placeholder) social links.
- **Schedule** — day tabs for the 3 conference days, a vertical timeline of sessions per day (time, category, title, room, speaker), and a "save to my agenda" toggle per session, with a running saved-count shown at the top.
- **Venue** — a clickable/hoverable zone map of the venue (auditorium, labs, halls, etc.), showing capacity and description for whichever zone is selected, plus accessibility/support notes.
- **IEEE CIS** — background on the sponsoring society: what it is, why the collaboration model matters, and some scale stats (founded 1990, 100+ countries, etc.).
- **Sponsors** — tiered sponsor logo groups plus an auto-scrolling marquee of "community partner" names underneath (pauses when hovered so it can be read).
- **Registration** — pricing cards for each delegate type (student/academic/industry/group), each listing perks and a "select pass" action.
- **FAQ** — a standard expand/collapse accordion of common questions.
- **Closing CTA** — a final full-width call to register, repeating the primary action before the footer.
- **Footer** — quick links back to every section, contact details, and social placeholders.

### Accessibility
- A "skip to main content" link for keyboard users, one `<h1>` per page, and properly ordered headings.
- Semantic landmarks (`header`, `nav`, `main`, `footer`) so screen readers can jump between regions.
- Visible focus outlines on every interactive element, and a 44px minimum size on tap targets.
- `aria-expanded` on the FAQ toggles and mobile menu button, `aria-modal`/`role="dialog"` on all overlays (search, shortcuts, speaker profile), `aria-live="polite"` on the toast and venue-zone panel so screen readers announce updates.
- Full reduced-motion support as described above.

### What's real vs. simulated
Everything above runs entirely in the browser — there's no backend. "Register", "save session", "watch live", and social links are all wired to in-page state or placeholder actions rather than real endpoints; that's expected for a prototype/demo build like this one, and the `netlify.toml` setup is exactly what you'd want whether the backend is added later or not.
