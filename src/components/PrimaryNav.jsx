import RouteLink from "./RouteLink";

function isActiveLink(href, currentPath) {
    if (href === "/") {
        return currentPath === "/";
    }

    if (href === "/news") {
        return currentPath === href || currentPath.startsWith("/articles/");
    }

    if (href.startsWith("/events/")) {
        return currentPath.startsWith("/events/");
    }

    return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function PrimaryNav({ items, navigate, currentPath }) {
    return (
        <nav className="primary-nav" aria-label="Primary">
            <ul className="primary-nav__list">
                {items.map((item) => {
                    const isActive = isActiveLink(item.href, currentPath);

                    return (
                        <li key={item.href} className="primary-nav__item">
                            <RouteLink
                                href={item.href}
                                navigate={navigate}
                                className={`primary-nav__link${isActive ? " is-active" : ""}`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.label}
                            </RouteLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
