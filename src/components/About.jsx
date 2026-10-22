import { CLUB, STATS, ACTIVITIES } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <h2 className="section-title">About us</h2>
        <div className="about-grid">
          <div>
            <p className="about-statement">{CLUB.name} at {CLUB.place} is where students who are curious about AI come to learn it properly, mentor each other, and get their work in front of researchers and industry.</p>
            <p className="about-note">Open to every student, whatever your branch or year.</p>
            <ul className="figures">
              {STATS.map((s) => <li key={s.label}><b>{s.n}</b> {s.label.toLowerCase()}</li>)}
            </ul>
          </div>
          <dl className="activities">
            {ACTIVITIES.map((a) => (
              <div key={a.title}>
                <dt>{a.title}</dt>
                <dd>{a.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
