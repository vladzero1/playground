import { gql } from '@apollo/client';
import { PrismaClient } from '@prisma/client';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';
const fs = require('fs')
const Query = require('./resolver/Query');
const PhotoUrl = require('./resolver/PhotoUrl');
const Mutation = require('./resolver/Mutation');
const { typeDefs } = require('./schema.ts')

const prisma = new PrismaClient({
    errorFormat: 'minimal'
});

const resolver ={
    Query,
    PhotoUrl,
    Mutation
}

const resolvers = {
    Query: {
        allPhotoUrl: (parent, args, context, info) => context.prisma.PhotoUrl,
        photoUrl: (parent, args, context, info) => context.prisma.PhotoUrl.find(context.prisma.PhotoUrl.id === args.id),
    },
    Mutation:{
        postPhotoUrl: async (parent, args, context, info) => {
            const newPhotoUrl = await context.prisma.PhotoUrl.create({
                data: {
                    url: args.url
                }
            });
            return newPhotoUrl;
        }
    }
};

const graphqlSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolver
});

const server = new ApolloServer({
    schema: graphqlSchema,
    context: prisma
}).listen(4000);

