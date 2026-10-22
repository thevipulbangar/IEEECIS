import { useState } from 'react';
import { CLUB } from '../data.js';

const LINKS = [
  ['#about', 'About'],
  ['#events', 'Past events'],
  ['#upcoming', 'Upcoming'],
  ['#team', 'Team'],
  ['#contact', 'Contact']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <a href="#top" className="wordmark" onClick={close}>{CLUB.name}</a>
      <button className="burger" aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav id="menu" aria-label="Primary" className={open ? 'open' : ''}>
        {LINKS.map(([href, label]) => <a key={href} href={href} onClick={close}>{label}</a>)}
        <a href="#register" className="btn btn-sm" onClick={close}>Register</a>
      </nav>
    </header>
  );
}
