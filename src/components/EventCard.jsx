// One stop on the events timeline. Pass onRegister for upcoming events.
export default function EventCard({ event, onRegister }) {
  const day = event.t.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  return (
    <li className={'tl-item' + (onRegister ? ' is-upcoming' : '')}>
      <time className="tl-date" dateTime={event.date}>
        <span className="tl-day">{day}</span>
        <span className="tl-year">{event.t.getFullYear()}</span>
      </time>
      <div className="tl-body">
        <p className="tl-meta">{event.type}, {event.venue}</p>
        <h3>{event.title}</h3>
        <p>{event.text}</p>
        {!onRegister && event.summary && <p className="tl-result">{event.summary}</p>}
        {onRegister && (
          <a className="btn btn-sm btn-ghost" href="#register" onClick={() => onRegister(event.title)}>Register</a>
        )}
      </div>
    </li>
  );
}
