export default {
    name: 'contact',
    title: 'Kontaktinfo',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Navn',
            type: 'string',
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
            name: 'email',
            title: 'E-post',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Telefon',
            type: 'string',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
        },
    ]
}