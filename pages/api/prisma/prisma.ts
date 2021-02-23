import { PrismaClient } from '@prisma/client';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';

const Query = require('./resolver/Query');
const PhotoUrl = require('./resolver/PhotoUrl');
const Mutation = require('./resolver/Mutation');
const schema = require('./schema.ts')

// const prisma = new PrismaClient({
//     errorFormat: 'minimal'
// });

const resolvers = {
    Query,
    PhotoUrl,
    Mutation
};

// const server = new ApolloServer({
//     typeDefs: schema,
//     resolvers,
//     context: prisma
// });

export const graphqlSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers
});

// const server = new ApolloServer({
//     typeDefs: fs.readFileSync(
//         `${__dirname}/schema.graphql`,
//         'utf8'
//     ),
//     resolvers,
//     context: prisma
// });