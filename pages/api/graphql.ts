import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-micro';
const Query = require('../../src/resolver/Query');
const Mutation = require('../../src/resolver/Mutation');
const { typeDefs } = require('../../src/schema/schema')
const { getUserId } = require('../utils');

const prisma = new PrismaClient({
    errorFormat: 'minimal'
});

const resolvers = {
    Query,
    Mutation
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({ req }) => {
        return {
            prisma,
        }
    },
    

})

const handler = (server.createHandler({ path: `/api${server.graphqlPath}` }));
  
export default handler;

export const config = {
    api: {
        bodyParser: false,
    },
}