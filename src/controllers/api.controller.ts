import { Context } from '../models/context';
import { VerifyAuthorization } from '../decorators/auth.decorator';
import ApiKey from '../models/ApiKey';
import { GraphQLError } from 'graphql';
// const ApiKey = require('../models/ApiKey');

export class ApiController {
  // @VerifyAuthorization
  getKeys(args: any, ctx: Context) {
    return ApiKey.find()
      .then((keys: any) => {
        return keys;
      });
  }

  addApiKey(args:any,ctx:Context){
    return ApiKey.create({...args,createdAt:new Date()}).then((NewApiKey:any)=>{
      return NewApiKey;
    })
    console.log("donee")

  }
}
