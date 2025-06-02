export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <h2>{project.title}</h2>
            {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} />
            )}
            <p>{project.description}</p>
                    
            <div>
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

            <p>Refleksjon: {project.reflection}</p>
                    
            {project.liveDemo && (
                <p>
                    <a href={project.liveDemo}>Live Demo</a>
                </p>
            )}

            {project.githubLink && (
                <p>
                    <a href={project.githubLink}>Github lenke</a>
                </p>
            )}
        </article>
    )
}