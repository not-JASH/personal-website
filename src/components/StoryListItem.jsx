import RouteLink from "./RouteLink";

export default function StoryListItem({ story, navigate }) {
    return (
        <article className={`story-list-item tone-${story.tone}`}>
            <div className="story-list-item__meta">
                <span className="story-list-item__category">{story.category}</span>
                <span>{story.date}</span>
            </div>
            <div className="story-list-item__content">
                <h3 className="story-list-item__title">
                    <RouteLink href={story.href} navigate={navigate} className="card-link">
                        {story.title}
                    </RouteLink>
                </h3>
                <p className="story-list-item__summary">{story.summary}</p>
                <div className="meta-row">
                    <span>{story.author}</span>
                    <span>{story.readTime}</span>
                </div>
            </div>
        </article>
    );
}
