import { NewsletterSignup, RouteLink, SidebarModule } from "../components";

export default function ArticlePage({ story, article, relatedStories, navigate }) {
    return (
        <div className="page page--article">
            <section className="page-shell article-hero">
                <div className="article-hero__content">
                    <p className="page-intro__eyebrow">{story.category}</p>
                    <h1 className="article-hero__title">{story.title}</h1>
                    <p className="article-hero__dek">{article.dek}</p>
                    <div className="meta-row">
                        <span>{story.author}</span>
                        <span>{story.date}</span>
                        <span>{story.readTime}</span>
                    </div>
                </div>
                <div className="article-hero__media">
                    <img src={story.image.src} alt={story.image.alt} className="article-hero__image" />
                </div>
            </section>

            <section className="page-shell article-layout">
                <article className="article-body">
                    <p className="article-body__lede">{article.lede}</p>
                    {article.sections.map((section) => (
                        <section key={section.id} id={section.id} className="article-body__section">
                            <h2>{section.heading}</h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </section>
                    ))}
                    <blockquote className="article-body__quote">
                        <p>{article.quote}</p>
                    </blockquote>
                </article>

                <div className="sidebar-stack">
                    {article.sidebarModules.map((module) => (
                        <SidebarModule key={module.title} eyebrow="Article notes" title={module.title}>
                            {module.items ? (
                                <ul className="module-list">
                                    {module.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="module-list">
                                    {relatedStories.map((relatedStory) => (
                                        <li key={relatedStory.id}>
                                            <RouteLink href={relatedStory.href} navigate={navigate} className="text-link">
                                                {relatedStory.title}
                                            </RouteLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </SidebarModule>
                    ))}
                </div>
            </section>

            <div className="page-shell band">
                <NewsletterSignup />
            </div>
        </div>
    );
}
