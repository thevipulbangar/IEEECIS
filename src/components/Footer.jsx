import { CLUB } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span className="wordmark">{CLUB.name}</span>
        <span>{CLUB.place}, {new Date().getFullYear()}</span>
        <span className="footer-links">
          <a href={CLUB.instagram} target="_blank" rel="noopener">Instagram</a>
          <a href={CLUB.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
