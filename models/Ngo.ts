import mongoose from "mongoose";

const schema = mongoose.Schema

const NgoSchema = new schema({
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
    },
    events: [String]
})

export default mongoose.model('Ngo', NgoSchema)