export default function AboutCard({ about, compact = false }) {

    return (
        <article>
            {about.profileImage && (
                <img src={about.profileImage} alt={about.name} />
            )}

            <p>{about.name}</p>

            {about.birthDate && <p>Fødselsdato: {about.birthDate}</p>}

            {about.role && <p>Yrkesrolle: {about.role}</p>}

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