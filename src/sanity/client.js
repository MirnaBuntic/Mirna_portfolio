import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'yn8saaef',
    dataset: 'production',
    apiVersion: '2025-03-24',
    useCdn: false,
});