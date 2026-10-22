import Countdown from './Countdown.jsx';
import EventCard from './EventCard.jsx';

export default function UpcomingEvents({ events, onRegister }) {
  return (
    <section id="upcoming" className="section">
      <div className="wrap">
        <h2 className="section-title">Coming up</h2>
        {events.length === 0 ? (
          <p className="empty">Nothing scheduled yet. Follow us on Instagram to hear about the next event first.</p>
        ) : (
          <>
            <Countdown event={events[0]} onRegister={onRegister} />
            <ol className="timeline">
              {events.map((e) => <EventCard key={e.title} event={e} onRegister={onRegister} />)}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}
