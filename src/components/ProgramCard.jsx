export default function ProgramCard({ program }) {
    return (
        <article className={`program-card tone-${program.tone}`}>
            <div className="program-card__media">
                <img src={program.image.src} alt={program.image.alt} className="program-card__image" />
            </div>
            <div className="program-card__body">
                <p className="meta-kicker">
                    <span className="meta-kicker__tone">{program.category}</span>
                    <span>{program.format}</span>
                </p>
                <h3 className="program-card__title">{program.title}</h3>
                <p className="program-card__summary">{program.summary}</p>
                <div className="meta-row">
                    <span>{program.cadence}</span>
                    <span>{program.format}</span>
                </div>
                <ul className="program-card__highlights">
                    {program.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
