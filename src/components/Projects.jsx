import ProjectCard from "./projectCard";

export default function Projects({ projects, loadingProjects }) {

    if (loadingProjects) return <p>Laster prosjekt...</p>

    return (
        <section>
            <h1>Mine prosjekter</h1>
            {projects.map(project => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </section>
    )
}