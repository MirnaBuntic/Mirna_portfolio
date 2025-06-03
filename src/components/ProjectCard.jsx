export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <h2>{project.title}</h2>

            {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} />
            )}

            <p className="desktop-only">{project.description}</p>
                    
            <div className="desktop-only">
                <p>Teknologier:</p>
                {project.technologies && project.technologies.length > 0 ? (
                    <ul>
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Ingen teknologier gitt</p>
                )}
            </div>

            <p className="desktop-only">Refleksjon: {project.reflection}</p>

            <div className="button-group">
                {project.liveDemo && (
                    <p>
                        <a className="github-button" href={project.liveDemo}>Live Demo</a>
                    </p>
                )}

                {project.githubLink && (
                    <p>
                        <a className="github-button" href={project.githubLink}>Github lenke</a>
                    </p>
                )}
            </div>
        </article>
    )
}