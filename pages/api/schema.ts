export const typeDefs = `
type Query {
    allPhotoUrl: PhotoUrl
    photoUrl(id: ID!): PhotoUrl
}

type Mutation {
    postPhotoUrl(url: String!): PhotoUrl
}

type PhotoUrl{
    id: ID
    url: String
}
`