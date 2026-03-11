import RouteLink from "./RouteLink";

export default function StoryCard({ story, navigate }) {
    return (
        <article className={`story-card tone-${story.tone}`}>
            <div className="story-card__media">
                <img src={story.image.src} alt={story.image.alt} className="story-card__image" />
            </div>
            <div className="story-card__body">
                <p className="meta-kicker">
                    <span className="meta-kicker__tone">{story.category}</span>
                    <span>{story.topic}</span>
                </p>
                <h3 className="story-card__title">
                    <RouteLink href={story.href} navigate={navigate} className="card-link">
                        {story.title}
                    </RouteLink>
                </h3>
                <p className="story-card__summary">{story.summary}</p>
            </div>
        </article>
    );
}
