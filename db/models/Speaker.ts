import mongoose, { mongo } from "mongoose"

const schema = mongoose.Schema

const SpeakerSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    aadhaar: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    experience : {
        type: Number,
        required: true
    }
},{versionKey: false})

export default mongoose.model('Speaker', SpeakerSchema)