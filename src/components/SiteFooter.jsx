import RouteLink from "./RouteLink";

export default function SiteFooter({ siteMeta, footerColumns, navigate }) {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner page-shell">
                <div className="site-footer__brand">
                    <p className="site-footer__name">{siteMeta.name}</p>
                    <p className="site-footer__description">{siteMeta.description}</p>
                </div>
                <div className="site-footer__columns">
                    {footerColumns.map((column) => (
                        <section key={column.title} className="site-footer__column">
                            <h2 className="site-footer__heading">{column.title}</h2>
                            <ul className="site-footer__list">
                                {column.links.map((link) => (
                                    <li key={link.href} className="site-footer__item">
                                        <RouteLink href={link.href} navigate={navigate} className="site-footer__link">
                                            {link.label}
                                        </RouteLink>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </footer>
    );
}
