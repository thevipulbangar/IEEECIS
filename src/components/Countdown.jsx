import { useEffect, useState } from 'react';
import { fmtDate } from '../utils.js';

const pad = (v) => String(v).padStart(2, '0');

export default function Countdown({ event, onRegister }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const ms = Math.max(0, event.t - now);
  const parts = [
    [Math.floor(ms / 864e5), 'days'],
    [Math.floor(ms / 36e5) % 24, 'hours'],
    [Math.floor(ms / 6e4) % 60, 'minutes'],
    [Math.floor(ms / 1e3) % 60, 'seconds']
  ];

  return (
    <div className="countdown">
      <p className="countdown-lead">{event.title} starts in</p>
      <div className="countdown-digits" role="timer">
        {parts.map(([v, label]) => <span key={label}><b>{pad(v)}</b>{label}</span>)}
      </div>
      <div className="countdown-foot">
        <span>{fmtDate(event.t)}, {event.venue}</span>
        <a href="#register" className="btn" onClick={() => onRegister(event.title)}>Register now</a>
      </div>
    </div>
  );
}
