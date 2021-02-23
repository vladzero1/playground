import { useMemo } from "react";
import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "apollo-server";
// import schema from "../pages/api/prisma/schema"

let apolloClient;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

const httplink = createHttpLink({
  uri: "https://localhost:3000",
})
function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: httplink,
        cache: new InMemoryCache(),
        credentials: 'same-origin'
    });
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Restore the cache using the data passed from
        // getStaticProps/getServerSideProps combined with the existing cached data
        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    // const store = null
    return store;
}