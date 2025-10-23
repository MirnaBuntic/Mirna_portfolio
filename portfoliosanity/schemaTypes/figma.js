export default {
    name: 'figma',
    title: 'Figma',
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
            name: 'link',
            title: 'Lenke',
            type: 'url',
        },
    ],
}