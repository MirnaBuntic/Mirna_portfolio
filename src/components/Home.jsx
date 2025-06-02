import ProjectCard from "./projectCard";
import AboutCard from "./AboutCard";
import { Link } from "react-router-dom";

export default function Home({ projects, loadingProjects, about, loadingAbout }) {
    if (loadingProjects) return <p>Laster prosjekter...</p>
    if (loadingAbout) return <p>Laster informasjon...</p>

    const featured = projects.slice(0, 3)

    return (
        <>
            <section className="personal">
                <h1>Mirna Buntic</h1>
                <p>Frontend-utvikler under opplæring</p>
                <Link to="/contact">Kontakt meg</Link>
            </section>

            <section>
                <h2 className="project-h2">Noen av mine prosjekter</h2>
                {featured.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </section>

            <section>
                <h2>Se flere prosjekter her</h2>
                <Link to="/projects">Gå til prosjektsiden</Link>
            </section>

            <section>
                <AboutCard about={about} compact />
                <Link to="/about">Les mer om meg her</Link>
            </section>
        </>
    )
}