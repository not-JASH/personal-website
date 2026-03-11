import RouteLink from "./RouteLink";

export default function FeaturedStoryCard({ story, navigate }) {
    return (
        <article className={`featured-story-card tone-${story.tone}`}>
            <div className="featured-story-card__media">
                <img src={story.image.src} alt={story.image.alt} className="featured-story-card__image" />
            </div>
            <div className="featured-story-card__body">
                <p className="meta-kicker">
                    <span className="meta-kicker__tone">{story.category}</span>
                    <span>{story.topic}</span>
                </p>
                <h2 className="featured-story-card__title">
                    <RouteLink href={story.href} navigate={navigate} className="card-link">
                        {story.title}
                    </RouteLink>
                </h2>
                <p className="featured-story-card__summary">{story.summary}</p>
                <div className="meta-row">
                    <span>{story.author}</span>
                    <span>{story.date}</span>
                    <span>{story.readTime}</span>
                </div>
            </div>
        </article>
    );
}
