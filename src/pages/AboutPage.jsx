import { NewsletterSignup, SidebarModule } from "../components";

export default function AboutPage({ config }) {
    return (
        <div className="page page--about">
            <section className="page-shell page-intro">
                <div className="page-intro__copy">
                    <p className="page-intro__eyebrow">{config.eyebrow}</p>
                    <h1 className="page-intro__title">{config.title}</h1>
                    <p className="page-intro__description">{config.description}</p>
                </div>
            </section>

            <section className="page-shell about-mission" id="mission">
                <div className="about-mission__copy">
                    <p className="page-intro__eyebrow">Mission statement</p>
                    <h2 className="about-mission__title">{config.mission}</h2>
                </div>
                <div className="stats-grid">
                    {config.stats.map((stat) => (
                        <article key={stat.label} className="stats-grid__item">
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </article>
                    ))}
                </div>
            </section>

            {config.sections.map((section) => (
                <section key={section.id} id={section.id} className="page-shell about-section">
                    <div className="about-section__media">
                        <img src={section.image.src} alt={section.image.alt} className="about-section__image" />
                    </div>
                    <div className="about-section__body">
                        <p className="page-intro__eyebrow">{section.eyebrow}</p>
                        <h2 className="about-section__title">{section.title}</h2>
                        {section.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </section>
            ))}

            <section className="page-shell content-with-sidebar" id="contact">
                <div className="note-grid">
                    <article className="note-card">
                        <h3>Address</h3>
                        {config.contact.address.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </article>
                    <article className="note-card">
                        <h3>Email</h3>
                        <p>{config.contact.email}</p>
                    </article>
                    <article className="note-card">
                        <h3>Phone</h3>
                        <p>{config.contact.phone}</p>
                    </article>
                </div>
                <div className="sidebar-stack">
                    <SidebarModule eyebrow="Theme note" title="Why this pattern works">
                        <p>
                            Editorial density on the home page is balanced by calm inner-page structures, narrow reading
                            measures, and strong metadata blocks for programs, people, and events.
                        </p>
                    </SidebarModule>
                </div>
            </section>

            <div className="page-shell band">
                <NewsletterSignup />
            </div>
        </div>
    );
}
