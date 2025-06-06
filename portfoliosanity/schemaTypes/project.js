export default {
    name: 'project',
    title: 'Projekt',
    type: 'document',
    fields: [
        {
            name: 'order',
            title: 'Sortering',
            type: 'number',
        },
        {
            name: 'title',
            title: 'Tittel',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Bilde',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'liveDemo',
            title: 'Live demo',
            type: 'url',
        },
        {
            name: 'githubLink',
            title: 'Github-lenke',
            type: 'url',
        },
    ],
}