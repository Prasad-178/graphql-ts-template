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
    // const apiKey = { args }
    console.log(args.input)
    console.log(args.input.admin)
    // console.log(apiKey.args.)
    return ApiKey.create({...args.input,createdAt:new Date()}).then((NewApiKey:any)=>{
      return NewApiKey;
    })
  }
}
