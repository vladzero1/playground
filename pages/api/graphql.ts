import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
const Query = require('../..//resolver/Query');
const Mutation = require('../../resolver/Mutation');
const { typeDefs } = require('../../schema/schema')

const prisma = new PrismaClient({
    errorFormat: 'minimal'
});

const resolvers = {
    Query,
    Mutation
}

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
  };

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: corsOptions,
    context: prisma
})

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );