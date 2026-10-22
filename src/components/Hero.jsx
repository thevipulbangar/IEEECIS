import { CLUB } from '../data.js';
import { fmtDate } from '../utils.js';
import NeuralMotif from './NeuralMotif.jsx';

export default function Hero({ next, onRegister }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="hero-mark">{CLUB.name}</h1>
          <p className="hero-sub">Computational Intelligence Society student chapter at {CLUB.place}</p>
          <p className="hero-lead">We learn neural networks, fuzzy systems and evolutionary algorithms by building things with them, together.</p>
          <div className="hero-actions">
            <a href="#register" className="btn" onClick={() => next && onRegister(next.title)}>Register for the next event</a>
            <a href="#events" className="btn btn-ghost">See what we've run</a>
          </div>
        </div>
        <NeuralMotif />
      </div>
      {next && (
        <a href="#upcoming" className="hero-next wrap">
          <span className="hero-next-label">Next up</span>
          <span className="hero-next-title">{next.title}</span>
          <span className="hero-next-date">{fmtDate(next.t)}, {next.venue}</span>
        </a>
      )}
    </section>
  );
}
