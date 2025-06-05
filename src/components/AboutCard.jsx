export default function AboutCard({ about, compact = false }) {

    return (
        <article className="about">
            {about.profileImage && (
                <img src={about.profileImage} alt={about.name} />
            )}

            <p>Hei, mitt navn er</p>

            <h1>{about.name}</h1>

            {about.role && <p className="role">{about.role}</p>}

            {!compact && (
                <>
                    <div className="me">
                        <h2>Om Meg</h2>

                        {about.description && <p className="description">{about.description}</p>}
                    </div>

                    {about.skills && about.skills.length > 0 && (
                        <div className="skills">
                            <h3>Ferdigheter</h3>
                            <ul>
                                {about.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </article>
    )
}