export const CONTACT_QUERY = `*[_type == "contact"][0]{
    name,
    "profileImageUrl": profileImage.asset->url,
    email,
    phone,
    linkedin
}`

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc){
    _id,
    title,
    description,
    technologies,
    reflection,
    "imageUrl": image.asset->url,
    liveDemo,
    githubLink
}`

export const HOME_PROJECTS_QUERY = `*[_type == "project"] | order(order asc)[0...3]{
    _id,
    title,
    description,
    "imageUrl": image.asset->url
}`

export const ABOUT_QUERY = `
    *[_type == "about"][0] {
    title,
    "profileImage": profileImage.asset->url,
    name,
    birthDate,
    role,
    description,
    skills
    }
`