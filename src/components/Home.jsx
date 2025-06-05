import ProjectCard from "./projectCard";
import AboutCard from "./AboutCard";
import ScrollToBottom from "./ScrollToBottom";
import { Link } from "react-router-dom";

export default function Home({ projects, loadingProjects, about, loadingAbout }) {
    if (loadingProjects) return <p>Laster prosjekter...</p>
    if (loadingAbout) return <p>Laster informasjon...</p>

    const featured = projects.slice(0, 3)

    return (
        <>
            <section>
                <AboutCard about={about} compact />
                <button
                    className="contact-button"
                    onClick={ScrollToBottom}
                    >
                    Kontakt Meg
                </button>
            </section>

            <section className="project-home">
                <p className="check">Sjekk Ut Mine Siste</p>
                <h2 className="project-h2">Prosjekter</h2>
                {featured.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}

                <article>
                    <Link to="/projects" className="more-projects">Se Flere Prosjekter Her</Link>
                </article>
            </section>
        </>
    )
}