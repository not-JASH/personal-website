function getInitials(name) {
    return name
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0])
        .join("");
}

export default function PersonRow({ person }) {
    return (
        <article className={`person-row tone-${person.tone}`}>
            <div className="person-row__avatar" aria-hidden="true">
                {getInitials(person.name)}
            </div>
            <div className="person-row__identity">
                <h3 className="person-row__name">{person.name}</h3>
                <p className="person-row__role">{person.role}</p>
            </div>
            <div className="person-row__details">
                <p className="person-row__unit">{person.unit}</p>
                <ul className="person-row__focus">
                    {person.focus.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="person-row__contact">
                <span>{person.office}</span>
                <a href={`mailto:${person.email}`} className="person-row__email">
                    {person.email}
                </a>
            </div>
        </article>
    );
}
