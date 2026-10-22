import { useRef } from 'react';
import { TEAM } from '../data.js';
import { initials } from '../utils.js';

export default function Team() {
  const rail = useRef(null);
  // Scroll by one card (card width + gap).
  const slide = (dir) => {
    const el = rail.current;
    const step = el.firstElementChild.offsetWidth + parseFloat(getComputedStyle(el).columnGap || 0);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="team" className="section section-deep">
      <div className="wrap team-head">
        <h2 className="section-title">The core team</h2>
        <div className="rail-arrows">
          <button type="button" aria-label="Previous member" onClick={() => slide(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Next member" onClick={() => slide(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <ul className="team-rail" ref={rail} tabIndex={0} aria-label="Core team members, scroll sideways">
        {TEAM.map((m, i) => (
          <li key={i} className="member">
            <div className="avatar">
              {m.photo ? <img src={m.photo} alt={m.name} loading="lazy" /> : <span aria-hidden="true">{initials(m.name)}</span>}
            </div>
            <p className="member-role">{m.role}</p>
            <h3>{m.name}</h3>
            <p className="member-info">{m.info}</p>
            {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener">LinkedIn</a>}
          </li>
        ))}
      </ul>
    </section>
  );
}
