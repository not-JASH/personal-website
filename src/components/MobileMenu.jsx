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

export default function MobileMenu({
    id,
    isOpen,
    primaryItems,
    utilityItems,
    navigate,
    currentPath
}) {
    return (
        <div
            id={id}
            className={`mobile-menu${isOpen ? " is-open" : ""}`}
            aria-hidden={!isOpen}
        >
            <div className="mobile-menu__inner">
                <div className="mobile-menu__group">
                    <p className="mobile-menu__label">Navigate</p>
                    <ul className="mobile-menu__list">
                        {primaryItems.map((item) => {
                            const isActive = isActiveLink(item.href, currentPath);

                            return (
                                <li key={item.href} className="mobile-menu__item">
                                    <RouteLink
                                        href={item.href}
                                        navigate={navigate}
                                        className={`mobile-menu__link${isActive ? " is-active" : ""}`}
                                    >
                                        {item.label}
                                    </RouteLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="mobile-menu__group">
                    <p className="mobile-menu__label">Quick Links</p>
                    <ul className="mobile-menu__list mobile-menu__list--utility">
                        {utilityItems.map((item) => (
                            <li key={item.href} className="mobile-menu__item">
                                <RouteLink href={item.href} navigate={navigate} className="mobile-menu__link">
                                    {item.label}
                                </RouteLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
