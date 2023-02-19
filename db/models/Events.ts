import mongoose from "mongoose";

const schema = mongoose.Schema

const EventSchema = new schema({
    schoolId: {
        type: String,
        required: true
    },
    ngoId: {
        type: String,
        required: true
    },
    speakerId: [String],
    details: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        desc: {
            type: String,
            required: false
        },
        images: [String],
    },
}, {versionKey: false})

export default mongoose.model('Events', EventSchema)