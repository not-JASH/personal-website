import { startTransition, useEffect, useMemo, useState } from "react";

import { SiteFooter, SiteHeader } from "./components";
import {
    aboutPage,
    articlePage,
    eventPage,
    events,
    footerColumns,
    getEventById,
    getPersonById,
    getProgramById,
    getStoryById,
    homePage,
    listingPage,
    people,
    peoplePage,
    primaryNav,
    programs,
    programsPage,
    siteMeta,
    stories,
    utilityNav
} from "./data/demoContent";
import {
    AboutPage,
    ArticlePage,
    EventPage,
    HomePage,
    ListingPage,
    PeoplePage,
    ProgramsPage
} from "./pages";

function getLocationState() {
    return {
        pathname: window.location.pathname,
        hash: window.location.hash
    };
}

function buildDefaultArticle(story) {
    return {
        dek: story.summary,
        lede: `${story.title} extends the journal's coverage of ${story.topic.toLowerCase()} through a concise editorial format shaped for quick scanning and deep reading.`,
        sections: [
            {
                id: "overview",
                heading: "Overview",
                paragraphs: [
                    story.summary,
                    `${story.author} frames the story within Atelier Civic's broader interest in institutions, public space, and durable urban systems.`
                ]
            },
            {
                id: "context",
                heading: "Context",
                paragraphs: [
                    `Filed under ${story.category}, the piece connects technical questions with legible public outcomes.`,
                    "The template keeps a narrow reading column, strong metadata, and supporting side modules so long-form editorial content remains calm and readable."
                ]
            },
            {
                id: "implications",
                heading: "Implications",
                paragraphs: [
                    "The underlying theme is that architectural decisions are inseparable from how spaces are financed, managed, repaired, and shared.",
                    "That combination of editorial voice and institutional clarity is the central logic of the demo."
                ]
            }
        ],
        quote:
            "The theme is designed to support interpretation, not just display: metadata, sequence, and reading comfort do most of the work.",
        sidebarModules: [
            {
                title: "Story details",
                items: [story.category, story.topic, story.date, story.readTime]
            },
            {
                title: "Related Reading",
                storyIds: stories
                    .filter((entry) => entry.id !== story.id)
                    .slice(0, 3)
                    .map((entry) => entry.id)
            }
        ]
    };
}

function resolvePage(pathname) {
    if (pathname === "/") {
        return {
            type: "home",
            title: siteMeta.name,
            secondaryNav: [
                { href: "/#latest-news", label: "Latest" },
                { href: "/#upcoming-events", label: "Events" },
                { href: "/#featured-programs", label: "Programs" },
                { href: "/#people-preview", label: "People" }
            ]
        };
    }

    if (pathname === "/news") {
        return { type: "listing", title: listingPage.title, secondaryNav: listingPage.secondaryNav };
    }

    if (pathname === "/programs") {
        return { type: "programs", title: programsPage.title, secondaryNav: programsPage.secondaryNav };
    }

    if (pathname === "/people") {
        return { type: "people", title: peoplePage.title, secondaryNav: peoplePage.secondaryNav };
    }

    if (pathname === "/about") {
        return { type: "about", title: aboutPage.title, secondaryNav: aboutPage.secondaryNav };
    }

    if (pathname.startsWith("/articles/")) {
        const storyId = pathname.replace("/articles/", "");
        const story = getStoryById(storyId);

        if (story) {
            const content = story.id === articlePage.storyId ? articlePage : buildDefaultArticle(story);

            return {
                type: "article",
                title: story.title,
                secondaryNav: content.sections.map((section) => ({
                    href: `${pathname}#${section.id}`,
                    label: section.heading.split(" ").slice(0, 2).join(" ")
                })),
                story,
                content
            };
        }
    }

    if (pathname.startsWith("/events/")) {
        const eventId = pathname.replace("/events/", "");
        const event = getEventById(eventId);

        if (event) {
            return {
                type: "event",
                title: event.title,
                secondaryNav:
                    event.id === eventPage.eventId
                        ? eventPage.secondaryNav
                        : [
                              { href: `${pathname}#overview`, label: "Overview" },
                              { href: `${pathname}#schedule`, label: "Schedule" },
                              { href: `${pathname}#speakers`, label: "People" },
                              { href: `${pathname}#register`, label: "Register" }
                          ],
                event
            };
        }
    }

    return { type: "not-found", title: "Page not found", secondaryNav: [] };
}

export default function App() {
    const [location, setLocation] = useState(getLocationState);
    const currentPage = useMemo(() => resolvePage(location.pathname), [location.pathname]);
    const heroStory = getStoryById(homePage.heroStoryId);
    const topicStories = homePage.topicStoryIds.map(getStoryById);
    const latestStories = homePage.latestStoryIds.map(getStoryById);
    const upcomingEvents = homePage.eventIds.map(getEventById);
    const featuredPrograms = homePage.programIds.map(getProgramById);
    const peoplePreview = homePage.peopleIds.map(getPersonById);

    useEffect(() => {
        function handlePopState() {
            setLocation(getLocationState());
        }

        window.addEventListener("popstate", handlePopState);

        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    useEffect(() => {
        document.title = `${currentPage.title} | ${siteMeta.name}`;
        const main = document.getElementById("main-content");
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (location.hash) {
            window.setTimeout(() => {
                document
                    .querySelector(location.hash)
                    ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
            }, 0);
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            main?.focus();
        }
    }, [currentPage.title, location.hash, location.pathname]);

    function navigate(nextHref) {
        if (`${location.pathname}${location.hash}` === nextHref) {
            return;
        }

        startTransition(() => {
            window.history.pushState({}, "", nextHref);
            setLocation(getLocationState());
        });
    }

    function renderCurrentPage() {
        if (currentPage.type === "home") {
            return (
                <HomePage
                    intro={homePage.intro}
                    heroStory={heroStory}
                    topicStories={topicStories}
                    latestStories={latestStories}
                    upcomingEvents={upcomingEvents}
                    featuredPrograms={featuredPrograms}
                    peoplePreview={peoplePreview}
                    navigate={navigate}
                />
            );
        }

        if (currentPage.type === "listing") {
            return (
                <ListingPage
                    config={listingPage}
                    stories={stories}
                    featuredEvent={events[0]}
                    navigate={navigate}
                />
            );
        }

        if (currentPage.type === "programs") {
            return <ProgramsPage config={programsPage} programs={programs} />;
        }

        if (currentPage.type === "people") {
            return <PeoplePage config={peoplePage} people={people} />;
        }

        if (currentPage.type === "about") {
            return <AboutPage config={aboutPage} />;
        }

        if (currentPage.type === "article") {
            const relatedStories = currentPage.content.sidebarModules
                .flatMap((module) => module.storyIds || [])
                .map(getStoryById)
                .filter(Boolean);

            return (
                <ArticlePage
                    story={currentPage.story}
                    article={currentPage.content}
                    relatedStories={relatedStories}
                    navigate={navigate}
                />
            );
        }

        if (currentPage.type === "event") {
            return (
                <EventPage
                    event={currentPage.event}
                    config={eventPage}
                    relatedEvents={events.filter((event) => event.id !== currentPage.event.id).slice(0, 3)}
                    navigate={navigate}
                />
            );
        }

        return (
            <div className="page page--not-found">
                <section className="page-shell page-intro">
                    <div className="page-intro__copy">
                        <p className="page-intro__eyebrow">Not found</p>
                        <h1 className="page-intro__title">The requested page is not available in this demo.</h1>
                        <p className="page-intro__description">
                            Use the primary navigation to return to the homepage, journal, programs, people, events, or
                            about templates.
                        </p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to content
            </a>
            <SiteHeader
                siteMeta={siteMeta}
                utilityItems={utilityNav}
                primaryItems={primaryNav}
                secondaryNav={currentPage.secondaryNav}
                navigate={navigate}
                currentPath={location.pathname}
            />
            <main id="main-content" className="app-main" tabIndex="-1">
                {renderCurrentPage()}
            </main>
            <SiteFooter siteMeta={siteMeta} footerColumns={footerColumns} navigate={navigate} />
        </>
    );
}
