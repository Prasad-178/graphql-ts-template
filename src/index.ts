import server from "./apolloServer";
import app from "./app";
import mongoose from "mongoose";
import env from "./config/environment/config";

server.start()
  .then(
  () => {
    server.applyMiddleware({ app, path: '/graphql' });
    mongoose.connect(`mongodb+srv://${env.mongodb_username}:${env.mongodb_password}@gsc-api.n4okeny.mongodb.net/gsc_api?retryWrites=true&w=majority`)
      .then(
      () => {
      app.listen({ port: process.env.PORT || 5500 }, 
        (): void =>
        console.log(`\n🚀 GraphQL is now running on http://localhost:${env.port || 5500}/graphql`)
      );
    })
})
