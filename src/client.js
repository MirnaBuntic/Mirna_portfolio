import { createClient } from '@sanity/client'

export const client = createClient({
    projektId: 'yn8saaef',
    dataset: 'production',
    apiVersion: 'v2025-03-24',
    useCdn: false,
});