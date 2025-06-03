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
                    {about.description && <p>{about.description}</p>}

                    {about.skills && about.skills.length > 0 && (
                        <div>
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