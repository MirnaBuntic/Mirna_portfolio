export default {
    name: 'about',
    title: 'Om meg',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tittel',
            type: 'string',
            initialValue: 'Om meg',
        },
        {
            name: 'profileImage',
            title: 'Profilbilde',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Navn',
            type: 'string',
        },
        {
            name: 'birtDate',
            title: 'Fødselsdato',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'role',
            title: 'Yrkesrolle',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Beskrivelse',
            type: 'text',
        },
        {
            name: 'skills',
            title: 'Ferdigheter',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
}