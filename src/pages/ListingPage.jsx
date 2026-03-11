import { startTransition, useDeferredValue, useEffect, useMemo, useState } from "react";

import {
    FeaturedStoryCard,
    FilterBar,
    Pagination,
    RouteLink,
    SidebarModule,
    StoryListItem
} from "../components";

export default function ListingPage({ config, stories, featuredEvent, navigate }) {
    const [searchValue, setSearchValue] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const deferredSearch = useDeferredValue(searchValue);
    const filters = useMemo(
        () => ["All", ...new Set(stories.map((story) => story.category))],
        [stories]
    );

    const filteredStories = useMemo(() => {
        const normalizedSearch = deferredSearch.trim().toLowerCase();

        return stories.filter((story) => {
            const matchesFilter = activeFilter === "All" || story.category === activeFilter;
            const haystack = `${story.title} ${story.summary} ${story.topic} ${story.author}`.toLowerCase();
            const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);

            return matchesFilter && matchesSearch;
        });
    }, [stories, activeFilter, deferredSearch]);

    const featuredStory = filteredStories[0];
    const remainingStories = filteredStories.slice(1);
    const totalPages = Math.max(1, Math.ceil(remainingStories.length / config.pageSize));
    const safePage = Math.min(currentPage, totalPages);
    const pageStories = remainingStories.slice(
        (safePage - 1) * config.pageSize,
        safePage * config.pageSize
    );

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    function handleSearchChange(nextValue) {
        startTransition(() => {
            setSearchValue(nextValue);
            setCurrentPage(1);
        });
    }

    function handleFilterChange(nextFilter) {
        startTransition(() => {
            setActiveFilter(nextFilter);
            setCurrentPage(1);
        });
    }

    return (
        <div className="page page--listing">
            <section className="page-shell page-intro">
                <div className="page-intro__copy">
                    <p className="page-intro__eyebrow">{config.eyebrow}</p>
                    <h1 className="page-intro__title">{config.title}</h1>
                    <p className="page-intro__description">{config.description}</p>
                </div>
            </section>

            <section className="page-shell band" id="topics">
                <FilterBar
                    searchValue={searchValue}
                    onSearchChange={handleSearchChange}
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                    resultsLabel={`${filteredStories.length} stor${filteredStories.length === 1 ? "y" : "ies"}`}
                    searchPlaceholder="Search titles, authors, or topics"
                />
            </section>

            <section className="page-shell listing-layout" id="latest">
                <div className="listing-layout__main">
                    {featuredStory ? (
                        <FeaturedStoryCard story={featuredStory} navigate={navigate} />
                    ) : (
                        <div className="empty-state">
                            <h2>No stories match the current filters.</h2>
                            <p>Try removing a category or broadening the search terms.</p>
                        </div>
                    )}

                    {pageStories.length ? (
                        <div className="stack-list">
                            {pageStories.map((story) => (
                                <StoryListItem key={story.id} story={story} navigate={navigate} />
                            ))}
                        </div>
                    ) : null}

                    <Pagination
                        currentPage={safePage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>

                <div className="sidebar-stack">
                    <SidebarModule eyebrow="Featured event" title={featuredEvent.title}>
                        <p>{featuredEvent.summary}</p>
                        <p>
                            {featuredEvent.dateLabel}
                            <br />
                            {featuredEvent.time}
                        </p>
                        <RouteLink href={featuredEvent.href} navigate={navigate} className="text-link">
                            View event details
                        </RouteLink>
                    </SidebarModule>
                    <SidebarModule eyebrow="Calendar" title="Upcoming editorial themes">
                        <ul className="module-list">
                            <li>April: transit buildings and public utilities</li>
                            <li>May: waterfront archives and repair histories</li>
                            <li>June: summer schools and fabrication culture</li>
                        </ul>
                    </SidebarModule>
                </div>
            </section>

            <section className="page-shell band" id="calendar">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Editorial calendar</p>
                        <h2 className="band__title">Planned beats</h2>
                    </div>
                </div>
                <div className="note-grid">
                    <article className="note-card">
                        <h3>Maintenance as design</h3>
                        <p>Case studies on service access, custodial routes, and repair budgets in civic buildings.</p>
                    </article>
                    <article className="note-card">
                        <h3>Measured streets</h3>
                        <p>Cross sections, curb details, and winter strategies for public rights-of-way.</p>
                    </article>
                    <article className="note-card">
                        <h3>Archive drawings</h3>
                        <p>Historic plans, sectional reconstructions, and municipal memory in the urban block.</p>
                    </article>
                </div>
            </section>
        </div>
    );
}
