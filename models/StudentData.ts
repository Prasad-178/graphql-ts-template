import mongoose from "mongoose";

const schema = mongoose.Schema

const StudentDataSchema = new schema({
    studentName: {
        type: String,
        required: true
    },
    contact: {
        studentEmail: {
            type: String,
            required: false
        },
        studentPhone: [{
            type: String,
            required: true
        }]
    },
    photo: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true
    },
    schoolId: {
        type: String,
        required: true
    },
    interests: [{
        name: {
            type: String,
            required: true
        },
        percentage: {
            type: Number,
            required: true
        }
    }]
}, {versionKey: false})

export default mongoose.model('StudentData', StudentDataSchema)