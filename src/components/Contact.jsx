import { useEffect, useState } from 'react';
import { client } from '../sanity/client';
import { CONTACT_QUERY } from '../sanity/sanityQueries';

export default function Contact() {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        client.fetch(CONTACT_QUERY)
            .then(setContact)
            .catch(console.error)
    }, []);

    if (!contact) return <p>Lader kontaktinfo...</p>

    return (
        <section>
            <h1>{contact.name}</h1>
            {contact.profileImageUrl && (
                <img src={contact.profileImageUrl} alt={contact.name} />
            )}
            <p>Epost: {contact.email}</p>
            <p>Telefon: {contact.phone}</p>
            <p>
                LinkedIn: <a href={contact.linkedin}>{contact.linkedin}</a>
            </p>
        </section>
    )
    
}