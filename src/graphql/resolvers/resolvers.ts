import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../models/context';
import { IResolvers } from '@graphql-tools/utils';
import * as jwt from 'jsonwebtoken';
import { AppConstants } from '../../constants/app.constants';
import { ApiController } from '../../controllers/api.controller';

const apiController = new ApiController();

const resolvers: IResolvers = {
  Query: {
    getKeys : (_: void, args: any, ctx: Context) =>{
      return apiController.getKeys(args,ctx);
    }
  },

  Mutation: {
    addApiKey: (_, inputObject: any, ctx: Context)=>{
      return apiController.addApiKey(inputObject, ctx);
    },
  },
};

export default resolvers;
