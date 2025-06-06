export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc){
    _id,
    title,
    "imageUrl": image.asset->url,
    liveDemo,
    githubLink
}`

export const HOME_PROJECTS_QUERY = `*[_type == "project"] | order(order asc)[0...3]{
    _id,
    title,
    "imageUrl": image.asset->url
}`

export const ABOUT_QUERY = `
    *[_type == "about"][0] {
    "profileImage": profileImage.asset->url,
    name,
    role,
    description,
    skills
    }
`