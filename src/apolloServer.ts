import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import schema from './graphql/schema';

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  introspection: true,
  context: async ({ req, res }) => {
    // return await mHelper.validateUser(req);
  },
});

export default server