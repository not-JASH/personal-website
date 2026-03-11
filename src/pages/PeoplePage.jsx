import { startTransition, useDeferredValue, useMemo, useState } from "react";

import { FilterBar, PersonRow, SidebarModule } from "../components";

export default function PeoplePage({ config, people }) {
    const [searchValue, setSearchValue] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const deferredSearch = useDeferredValue(searchValue);

    const filteredPeople = useMemo(() => {
        const normalizedSearch = deferredSearch.trim().toLowerCase();

        return people.filter((person) => {
            const matchesFilter = activeFilter === "All" || person.type === activeFilter;
            const haystack =
                `${person.name} ${person.role} ${person.unit} ${person.focus.join(" ")}`.toLowerCase();
            const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);

            return matchesFilter && matchesSearch;
        });
    }, [people, activeFilter, deferredSearch]);

    function handleSearchChange(nextValue) {
        startTransition(() => setSearchValue(nextValue));
    }

    function handleFilterChange(nextValue) {
        startTransition(() => setActiveFilter(nextValue));
    }

    return (
        <div className="page page--people">
            <section className="page-shell page-intro">
                <div className="page-intro__copy">
                    <p className="page-intro__eyebrow">{config.eyebrow}</p>
                    <h1 className="page-intro__title">{config.title}</h1>
                    <p className="page-intro__description">{config.description}</p>
                </div>
            </section>

            <section className="page-shell band" id="directory">
                <FilterBar
                    searchValue={searchValue}
                    onSearchChange={handleSearchChange}
                    filters={config.filters}
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                    resultsLabel={`${filteredPeople.length} person${filteredPeople.length === 1 ? "" : "s"}`}
                    searchPlaceholder="Search by name, role, unit, or focus"
                />
            </section>

            <section className="page-shell content-with-sidebar">
                <div className="stack-list">
                    {filteredPeople.map((person) => (
                        <PersonRow key={person.id} person={person} />
                    ))}
                </div>
                <div className="sidebar-stack">
                    <SidebarModule eyebrow="Units" title="School structure">
                        <ul className="module-list" id="units">
                            <li>Office of the Dean</li>
                            <li>Graduate Studios</li>
                            <li>Materials and Maintenance</li>
                            <li>External Affairs</li>
                        </ul>
                    </SidebarModule>
                    <SidebarModule eyebrow="Visiting" title="Current critics">
                        <ul className="module-list" id="visiting">
                            {config.visitingCritics.map((critic) => (
                                <li key={critic}>{critic}</li>
                            ))}
                        </ul>
                    </SidebarModule>
                </div>
            </section>
        </div>
    );
}
