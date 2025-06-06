export default {
    name: 'about',
    title: 'Om meg',
    type: 'document',
    fields: [
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