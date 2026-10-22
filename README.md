# IEEE CIS — VIT Pune

Club website: about, executed events, upcoming events with countdown, core team, event registration and contact. Built with React + Vite.

## Project structure

```
index.html              page shell + hidden Netlify form copies
src/
  data.js               ALL site content: club links, stats, activities, events, team
  utils.js              date helpers, event splitting, Netlify form submit hook
  styles.css            all styles
  main.jsx              React entry
  App.jsx               page layout (section order)
  components/
    Header.jsx          sticky nav + mobile menu
    Hero.jsx
    About.jsx           intro, stats, activity cards
    PastEvents.jsx      "Executed Events"
    UpcomingEvents.jsx  countdown + upcoming cards
    Countdown.jsx
    EventCard.jsx       shared by past and upcoming events
    Team.jsx            side-scrolling team rail
    Register.jsx        event registration form
    Contact.jsx         contact details + message form
    Footer.jsx
```

## Edit content

Everything is in `src/data.js`:

- `CLUB` — name, email, Instagram and LinkedIn links, address
- `EVENTS` — one list for all events. Past dates show under "Executed Events", future dates under "Upcoming" (the nearest one gets the countdown).
- `TEAM` — core team. For photos, put images in `public/team/` and add `photo: '/team/name.jpg'`. Add `linkedin: '...'` for a profile link.
- `STATS`, `ACTIVITIES` — numbers and activity cards in the About section.

If you rename or add a form field in `Register.jsx` or `Contact.jsx`, add it to the matching hidden form in `index.html` too, or Netlify will drop that field.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:5173. Forms only submit on Netlify (locally they show an error message).

## Deploy (Netlify)

`netlify.toml` already sets the build command (`npm run build`) and publish folder (`dist`). Registration and contact submissions appear in the Netlify dashboard under **Forms**; turn on email notifications there to get each one by email.
