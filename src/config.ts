export abstract class Config {
  public static mongoUrl = `mongodb+srv://prasadjs178:${process.env.MONGODB_PASSWORD}@gsc-api.n4okeny.mongodb.net/gsc_api?retryWrites=true&w=majority`;
}
