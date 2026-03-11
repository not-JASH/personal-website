import { useId } from "react";

export default function FilterBar({
    searchValue,
    onSearchChange,
    filters,
    activeFilter,
    onFilterChange,
    resultsLabel,
    searchPlaceholder = "Search"
}) {
    const inputId = useId();

    return (
        <section className="filter-bar" aria-label="Filters">
            <div className="filter-bar__search">
                <label htmlFor={inputId} className="filter-bar__label">
                    Search
                </label>
                <input
                    id={inputId}
                    type="search"
                    className="filter-bar__input"
                    value={searchValue}
                    onChange={(event) => onSearchChange?.(event.target.value)}
                    placeholder={searchPlaceholder}
                />
            </div>
            <div className="filter-bar__controls" role="group" aria-label="Filter categories">
                {filters.map((filter) => {
                    const isActive = filter === activeFilter;

                    return (
                        <button
                            key={filter}
                            type="button"
                            className={`filter-bar__chip${isActive ? " is-active" : ""}`}
                            onClick={() => onFilterChange?.(filter)}
                            aria-pressed={isActive}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>
            <p className="filter-bar__results">{resultsLabel}</p>
        </section>
    );
}
