import mongoose, { mongo } from "mongoose"

const schema = mongoose.Schema

const ApiKeySchema = new schema({
    key: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
}, {versionKey: false})

export default mongoose.model('ApiKey', ApiKeySchema)