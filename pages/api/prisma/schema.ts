export const typedefs = `
type Query {
    PhotoUrl(id: id!): PhotoUrl
}

type Mutation {
    PostPhoto(url: String!): PhotoUrl
}

type PhotoUrl{
    id: id
    url: String
}`
