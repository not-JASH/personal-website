import { EventCard, RouteLink, SidebarModule } from "../components";

function buildEventSchedule(event, config, isFeatured) {
    if (isFeatured) {
        return config.schedule;
    }

    return [
        {
            time: event.time.split(" - ")[0],
            title: "Arrival",
            detail: "Doors open and wayfinding desk available on site."
        },
        {
            time: event.time.split(" - ")[0],
            title: event.type,
            detail: event.summary
        },
        {
            time: event.time.split(" - ")[1] || event.time,
            title: "Closing",
            detail: "Informal conversation and follow-up information."
        }
    ];
}

function buildEventSpeakers(event, config, isFeatured) {
    if (isFeatured) {
        return config.speakers;
    }

    return [
        { name: "Atelier Civic Staff", role: "Host team", topic: "Welcome and event logistics" },
        { name: "Program Guests", role: event.type, topic: event.summary },
        { name: "Community Participants", role: "Attendees", topic: "Open discussion and questions" }
    ];
}

export default function EventPage({ event, config, relatedEvents, navigate }) {
    const isFeatured = event.id === config.eventId;
    const schedule = buildEventSchedule(event, config, isFeatured);
    const speakers = buildEventSpeakers(event, config, isFeatured);
    const ctaLabel = isFeatured ? config.cta.label : event.registerLabel;

    return (
        <div className="page page--event">
            <section className="page-shell event-hero">
                <div className="event-hero__content">
                    <p className="page-intro__eyebrow">{event.type}</p>
                    <h1 className="event-hero__title">{event.title}</h1>
                    <p className="event-hero__summary">
                        {isFeatured ? config.description : event.summary}
                    </p>
                    <div className="event-hero__meta">
                        <div>
                            <span className="event-hero__meta-label">Date</span>
                            <strong>{event.dateLabel}</strong>
                        </div>
                        <div>
                            <span className="event-hero__meta-label">Time</span>
                            <strong>{event.time}</strong>
                        </div>
                        <div>
                            <span className="event-hero__meta-label">Location</span>
                            <strong>{event.location}</strong>
                        </div>
                    </div>
                </div>
                <aside className="event-hero__aside" id="register">
                    <p className="meta-kicker">
                        <span className="meta-kicker__tone">Register</span>
                        <span>Capacity limited</span>
                    </p>
                    <p className="event-hero__cta-note">
                        {isFeatured
                            ? config.cta.note
                            : "Registration information is sent by email after you sign up."}
                    </p>
                    <a
                        href={`mailto:events@ateliercivic.edu?subject=${encodeURIComponent(event.title)}`}
                        className="button-link"
                    >
                        {ctaLabel}
                    </a>
                </aside>
            </section>

            <section className="page-shell event-layout" id="overview">
                <div className="event-layout__main">
                    <img src={event.image.src} alt={event.image.alt} className="event-layout__image" />
                    <p className="event-layout__body">
                        {event.summary} The page structure foregrounds time, place, registration, and clear scannable
                        information so that institutional events remain easy to parse on any device.
                    </p>
                </div>
                <div className="sidebar-stack">
                    <SidebarModule eyebrow="Plan your visit" title="What to expect">
                        <ul className="module-list">
                            <li>Accessible entrance and elevator route</li>
                            <li>Wayfinding desk open 30 minutes before start</li>
                            <li>Follow-up notes sent to registered attendees</li>
                        </ul>
                    </SidebarModule>
                </div>
            </section>

            <section className="page-shell band" id="schedule">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Schedule</p>
                        <h2 className="band__title">Day structure</h2>
                    </div>
                </div>
                <div className="schedule-list">
                    {schedule.map((item) => (
                        <article key={`${item.time}-${item.title}`} className="schedule-list__item">
                            <p className="schedule-list__time">{item.time}</p>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.detail}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-shell band" id="speakers">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">People</p>
                        <h2 className="band__title">Speakers and hosts</h2>
                    </div>
                </div>
                <div className="note-grid">
                    {speakers.map((speaker) => (
                        <article key={speaker.name} className="note-card">
                            <h3>{speaker.name}</h3>
                            <p>{speaker.role}</p>
                            <p>{speaker.topic}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-shell band">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">More events</p>
                        <h2 className="band__title">Related calendar items</h2>
                    </div>
                    <RouteLink href="/" navigate={navigate} className="band__action">
                        Return home
                    </RouteLink>
                </div>
                <div className="card-grid card-grid--events">
                    {relatedEvents.map((relatedEvent) => (
                        <EventCard key={relatedEvent.id} event={relatedEvent} navigate={navigate} />
                    ))}
                </div>
            </section>
        </div>
    );
}
