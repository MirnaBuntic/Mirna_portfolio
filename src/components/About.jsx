import AboutCard from "./AboutCard";

export default function About({ about, loadingAbout }) {

    if (loadingAbout) return <p>Laster prosjekt...</p>

    return (
        <section>
            <AboutCard about={about} />
        </section>
    );
}