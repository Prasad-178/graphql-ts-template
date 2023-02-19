import mongoose from "mongoose"

const schema = mongoose.Schema

const RequestSchema = new schema({
    fromType: {
        type: String,
        enum: ["Ngo", "School", "Speaker"],
        required: true
    },
    toType: {
        type: Boolean,
        enum: ["Speaker", "School"]
    },
    fromEmail: {
        type: String,
        required: true
    },
    toEmail: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
}, {versionKey: false})

export default mongoose.model('Request', RequestSchema)