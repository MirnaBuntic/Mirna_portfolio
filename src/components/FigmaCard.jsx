export default function FigmaCard({ item }) {
    return (
        <article className="project-card">
            <h2>{item.title}</h2>

            {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} />
            )}

            <div className="button-group">
                {item.link && (
                    <p>
                        <a className="github-button" href={item.link} target="_blank">
                            Åpne i Figma
                        </a>
                    </p>
                )}
            </div>
        </article>
    );
}
