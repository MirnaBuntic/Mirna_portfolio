export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <h2>{project.title}</h2>

            {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} />
            )}

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