import {
    EventCard,
    FeaturedStoryCard,
    NewsletterSignup,
    PersonRow,
    ProgramCard,
    RouteLink,
    SidebarModule,
    StoryCard,
    StoryListItem
} from "../components";

export default function HomePage({
    intro,
    heroStory,
    topicStories,
    latestStories,
    upcomingEvents,
    featuredPrograms,
    peoplePreview,
    navigate
}) {
    return (
        <div className="page page--home">
            <section className="page-shell page-intro page-intro--home">
                <div className="page-intro__copy">
                    <p className="page-intro__eyebrow">Journal and School</p>
                    <h1 className="page-intro__title">Architecture for the public realm, edited with discipline.</h1>
                    <p className="page-intro__description">{intro}</p>
                </div>
            </section>

            <section className="page-shell band band--hero">
                <FeaturedStoryCard story={heroStory} navigate={navigate} />
            </section>

            <section className="page-shell band" aria-labelledby="topic-cards-title">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Topic cards</p>
                        <h2 id="topic-cards-title" className="band__title">
                            Compact editorial briefings
                        </h2>
                    </div>
                    <RouteLink href="/news" navigate={navigate} className="band__action">
                        View all stories
                    </RouteLink>
                </div>
                <div className="card-grid card-grid--three">
                    {topicStories.map((story) => (
                        <StoryCard key={story.id} story={story} navigate={navigate} />
                    ))}
                </div>
            </section>

            <section className="page-shell band" id="latest-news" aria-labelledby="latest-news-title">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Latest journal</p>
                        <h2 id="latest-news-title" className="band__title">
                            News, criticism, and research notes
                        </h2>
                    </div>
                </div>
                <div className="content-with-sidebar">
                    <div className="stack-list">
                        {latestStories.map((story) => (
                            <StoryListItem key={story.id} story={story} navigate={navigate} />
                        ))}
                    </div>
                    <div className="sidebar-stack">
                        <SidebarModule eyebrow="Editorial rhythm" title="This month">
                            <ul className="module-list">
                                <li>Adaptive reuse and maintenance studies</li>
                                <li>Public interiors and shared lobbies</li>
                                <li>Housing finance and cooperative space</li>
                            </ul>
                        </SidebarModule>
                    </div>
                </div>
            </section>

            <section className="page-shell band" id="upcoming-events" aria-labelledby="events-title">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Calendar</p>
                        <h2 id="events-title" className="band__title">
                            Upcoming public events
                        </h2>
                    </div>
                </div>
                <div className="card-grid card-grid--events">
                    {upcomingEvents.map((event) => (
                        <EventCard key={event.id} event={event} navigate={navigate} />
                    ))}
                </div>
            </section>

            <section className="page-shell band" id="featured-programs" aria-labelledby="programs-title">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Programs</p>
                        <h2 id="programs-title" className="band__title">
                            Degrees, labs, and public study formats
                        </h2>
                    </div>
                    <RouteLink href="/programs" navigate={navigate} className="band__action">
                        Browse programs
                    </RouteLink>
                </div>
                <div className="card-grid card-grid--three">
                    {featuredPrograms.map((program) => (
                        <ProgramCard key={program.id} program={program} />
                    ))}
                </div>
            </section>

            <section className="page-shell band" id="people-preview" aria-labelledby="people-title">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Directory</p>
                        <h2 id="people-title" className="band__title">
                            Faculty, researchers, and staff
                        </h2>
                    </div>
                    <RouteLink href="/people" navigate={navigate} className="band__action">
                        Open directory
                    </RouteLink>
                </div>
                <div className="content-with-sidebar">
                    <div className="stack-list">
                        {peoplePreview.map((person) => (
                            <PersonRow key={person.id} person={person} />
                        ))}
                    </div>
                    <div className="sidebar-stack">
                        <SidebarModule eyebrow="Units" title="Directory structure">
                            <ul className="module-list">
                                <li>Office of the Dean</li>
                                <li>Urban Systems</li>
                                <li>Materials and Maintenance</li>
                                <li>Library and Archive</li>
                            </ul>
                        </SidebarModule>
                    </div>
                </div>
            </section>

            <div className="page-shell band">
                <NewsletterSignup />
            </div>
        </div>
    );
}
