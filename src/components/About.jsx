import AboutCard from "./AboutCard";

export default function About({ about, loadingAbout }) {

    if (loadingAbout) return <p>Laster prosjekt...</p>

    return (
        <section>
            <h1>Om meg</h1>
            <AboutCard about={about} />
        </section>
    );
}