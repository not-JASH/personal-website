import RouteLink from "./RouteLink";

export default function UtilityNav({ items, navigate }) {
    return (
        <nav className="utility-nav" aria-label="Utility">
            <ul className="utility-nav__list">
                {items.map((item) => (
                    <li key={item.href} className="utility-nav__item">
                        <RouteLink href={item.href} navigate={navigate} className="utility-nav__link">
                            {item.label}
                        </RouteLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
