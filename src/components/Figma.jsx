import FigmaCard from "./FigmaCard";

export default function Figma({ figmaItems }) {
    return (
        <section className="my-projectpage">
            <h1>Mine Figma-prosjekter</h1>

            <div className="project-container">
                {figmaItems.map(item => (
                    <FigmaCard key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
}
