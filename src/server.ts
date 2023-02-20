const dotenv = require('dotenv');
dotenv.config();

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './graphql/schema';
// import { MongoHelper } from './helpers/mongoHelpers';
import mongoose from "mongoose"

const app = express();
// const mHelper = new MongoHelper();
// mHelper.initiateMongoConnection();

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  introspection: true,
  // playground: true,
  context: async ({ req }) => {
    // return await mHelper.validateUser(req);
  },
});

app.use('*', cors());
app.use(compression());
server.start().then(() => {
  server.applyMiddleware({ app, path: '/graphql' });
  mongoose.connect(`mongodb+srv://prasadjs178:${process.env.MONGODB_PASSWORD}@gsc-api.n4okeny.mongodb.net/gsc_api?retryWrites=true&w=majority`).then(() => {
    app.listen({ port: process.env.PORT || 5500 }, (): void =>
      console.log(`\n🚀 GraphQL is now running on http://localhost:${process.env.PORT || 5500}/graphql`)
    );
  })
})

// const httpServer = createServer(app);


