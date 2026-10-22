import { useNetlifyForm } from '../utils.js';

const YEARS = ['First year', 'Second year', 'Third year', 'Final year', 'Other'];

// Field names must match the hidden "event-registration" form in index.html.
export default function Register({ events, selected, onSelect }) {
  const { status, sending, onSubmit } = useNetlifyForm('Registered. See you at the event.', () => onSelect(''));

  return (
    <section id="register" className="section">
      <div className="wrap form-layout">
        <div>
          <h2 className="section-title">Register for an event</h2>
          <p className="form-intro">Takes about a minute. Pick the event, tell us who you are, and you're on the list.</p>
        </div>
        <form name="event-registration" className="form" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="event-registration" />
          <p hidden><label>Leave this empty: <input name="bot-field" /></label></p>
          <label className="full">Event
            <select name="event" required value={selected} onChange={(e) => onSelect(e.target.value)}>
              <option value="">Choose an event</option>
              {events.map((e) => <option key={e.title}>{e.title}</option>)}
            </select>
          </label>
          <label>Full name <input name="name" autoComplete="name" required /></label>
          <label>Email <input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone <input type="tel" name="phone" autoComplete="tel" pattern="[0-9+ \-]{10,15}" required /></label>
          <label>Year
            <select name="year" required defaultValue="">
              <option value="">Choose</option>
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
          </label>
          <label>Branch <input name="branch" required /></label>
          <label>IEEE member?
            <select name="ieee_member"><option>No</option><option>Yes</option></select>
          </label>
          <button className="btn full" type="submit" disabled={sending}>Register</button>
          <p className="form-status full" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}
