import ProjectCard from "./projectCard";

export default function Projects({ projects, loadingProjects }) {

    if (loadingProjects) return <p>Laster prosjekt...</p>

    return (
        <section className="my-projectpage">
            <h1>Mine Prosjekter</h1>
            {projects.map(project => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </section>
    )
}