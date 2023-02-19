"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
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
}, { versionKey: false });
exports.default = mongoose_1.default.model('StudentData', StudentDataSchema);
