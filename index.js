import { ApolloServer, gql } from "apollo-server";
import resolvers from "./graphql/resolvers.js";

const typeDefs = `type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    searching(keyword:String!):[Movie]
    suggestions(id: Int!): [Movie]!
  }
  `;
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
      🚀  Server is ready at ${url}
      📭  Query at https://studio.apollographql.com/dev
    `);
});
