const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const DrinkAPI = require('./datasource/drinksAPI');

require('dotenv').config({path: __dirname + '/.env'});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      drinkAPI: new DrinkAPI(),
    }
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
`);
});