import { startTransition, useDeferredValue, useMemo, useState } from "react";

import { FilterBar, ProgramCard, SidebarModule } from "../components";

export default function ProgramsPage({ config, programs }) {
    const [searchValue, setSearchValue] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const deferredSearch = useDeferredValue(searchValue);

    const filteredPrograms = useMemo(() => {
        const normalizedSearch = deferredSearch.trim().toLowerCase();

        return programs.filter((program) => {
            const matchesFilter = activeFilter === "All" || program.category === activeFilter;
            const haystack =
                `${program.title} ${program.summary} ${program.category} ${program.highlights.join(" ")}`.toLowerCase();
            const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);

            return matchesFilter && matchesSearch;
        });
    }, [programs, activeFilter, deferredSearch]);

    function handleSearchChange(nextValue) {
        startTransition(() => setSearchValue(nextValue));
    }

    function handleFilterChange(nextValue) {
        startTransition(() => setActiveFilter(nextValue));
    }

    return (
        <div className="page page--programs">
            <section className="page-shell page-intro">
                <div className="page-intro__copy">
                    <p className="page-intro__eyebrow">{config.eyebrow}</p>
                    <h1 className="page-intro__title">{config.title}</h1>
                    <p className="page-intro__description">{config.description}</p>
                </div>
            </section>

            <section className="page-shell band" id="curriculum">
                <FilterBar
                    searchValue={searchValue}
                    onSearchChange={handleSearchChange}
                    filters={config.tabs}
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                    resultsLabel={`${filteredPrograms.length} program${filteredPrograms.length === 1 ? "" : "s"}`}
                    searchPlaceholder="Search programs, formats, or themes"
                />
            </section>

            <section className="page-shell band">
                <div className="card-grid card-grid--three">
                    {filteredPrograms.map((program) => (
                        <ProgramCard key={program.id} program={program} />
                    ))}
                </div>
            </section>

            <section className="page-shell content-with-sidebar" id="studios">
                <div className="note-grid">
                    {config.studioNotes.map((note) => (
                        <article key={note} className="note-card">
                            <h3>Studio principle</h3>
                            <p>{note}</p>
                        </article>
                    ))}
                </div>
                <div className="sidebar-stack">
                    <SidebarModule eyebrow="Research" title="Shared resources">
                        <ul className="module-list">
                            <li>Fabrication annex and mockup yard</li>
                            <li>Reading archive and drawing collection</li>
                            <li>Municipal partnership studios</li>
                        </ul>
                    </SidebarModule>
                </div>
            </section>

            <section className="page-shell band" id="research">
                <div className="band__header">
                    <div>
                        <p className="band__eyebrow">Research</p>
                        <h2 className="band__title">Institutional themes across the curriculum</h2>
                    </div>
                </div>
                <div className="tag-cloud">
                    <span className="tag-cloud__item">Adaptive reuse</span>
                    <span className="tag-cloud__item">Public housing</span>
                    <span className="tag-cloud__item">Cold climate envelopes</span>
                    <span className="tag-cloud__item">Street sections</span>
                    <span className="tag-cloud__item">Archive methods</span>
                    <span className="tag-cloud__item">Maintenance planning</span>
                </div>
            </section>
        </div>
    );
}
