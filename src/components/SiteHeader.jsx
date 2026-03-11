import { useEffect, useId, useState } from "react";

import MobileMenu from "./MobileMenu";
import PrimaryNav from "./PrimaryNav";
import RouteLink from "./RouteLink";
import UtilityNav from "./UtilityNav";

export default function SiteHeader({
    siteMeta,
    utilityItems,
    primaryItems,
    secondaryNav,
    navigate,
    currentPath
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuId = useId();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [currentPath]);

    return (
        <header className="site-header">
            <div className="site-header__bar page-shell">
                <UtilityNav items={utilityItems} navigate={navigate} />
            </div>
            <div className="site-header__masthead page-shell">
                <RouteLink href="/" navigate={navigate} className="site-brand" aria-label={siteMeta.name}>
                    <span className="site-brand__name">{siteMeta.name}</span>
                    <span className="site-brand__lockup">{siteMeta.lockup}</span>
                </RouteLink>
                <button
                    type="button"
                    className="site-header__menu-button"
                    aria-expanded={isMenuOpen}
                    aria-controls={menuId}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    Menu
                </button>
            </div>
            <div className="site-header__nav page-shell">
                <PrimaryNav items={primaryItems} navigate={navigate} currentPath={currentPath} />
            </div>
            {secondaryNav?.length ? (
                <div className="site-header__subnav page-shell">
                    <nav className="section-nav" aria-label="Section">
                        <ul className="section-nav__list">
                            {secondaryNav.map((item) => (
                                <li key={item.href} className="section-nav__item">
                                    <RouteLink
                                        href={item.href}
                                        navigate={navigate}
                                        className="section-nav__link"
                                    >
                                        {item.label}
                                    </RouteLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            ) : null}
            <div className="page-shell">
                <MobileMenu
                    id={menuId}
                    isOpen={isMenuOpen}
                    primaryItems={primaryItems}
                    utilityItems={utilityItems}
                    navigate={navigate}
                    currentPath={currentPath}
                />
            </div>
        </header>
    );
}
