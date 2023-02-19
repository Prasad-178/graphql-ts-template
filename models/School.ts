import mongoose from "mongoose";
import StudentData from "./StudentData";

const schema = mongoose.Schema

const SchoolSchema = new schema({
    name: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: String,
            required: true
        },
        long: {
            type: String,
            required: true
        }
    },
    contact: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    }
}, {versionKey: false})

export default mongoose.model('School', SchoolSchema)