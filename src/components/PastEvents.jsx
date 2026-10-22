import EventCard from './EventCard.jsx';

export default function PastEvents({ events }) {
  return (
    <section id="events" className="section section-deep">
      <div className="wrap">
        <h2 className="section-title">Events we've run</h2>
        <ol className="timeline">
          {events.map((e) => <EventCard key={e.title} event={e} />)}
        </ol>
      </div>
    </section>
  );
}
