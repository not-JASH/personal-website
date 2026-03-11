import RouteLink from "./RouteLink";

export default function EventCard({ event, navigate }) {
    return (
        <article className={`event-card tone-${event.tone}`}>
            <div className="event-card__date">
                <span className="event-card__month">{event.month}</span>
                <span className="event-card__day">{event.day}</span>
            </div>
            <div className="event-card__body">
                <p className="meta-kicker">
                    <span className="meta-kicker__tone">{event.type}</span>
                    <span>{event.location}</span>
                </p>
                <h3 className="event-card__title">
                    <RouteLink href={event.href} navigate={navigate} className="card-link">
                        {event.title}
                    </RouteLink>
                </h3>
                <p className="event-card__summary">{event.summary}</p>
                <div className="meta-row">
                    <span>{event.dateLabel}</span>
                    <span>{event.time}</span>
                </div>
            </div>
        </article>
    );
}
