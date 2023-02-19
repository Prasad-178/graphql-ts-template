import mongoose from "mongoose";
import { mongodb_password } from "../config/environment/config";

const conn = mongoose.connect
(`mongodb+srv://prasadjs178:${mongodb_password}@gsc-api.n4okeny.mongodb.net/?retryWrites=true&w=majority`)

export default conn