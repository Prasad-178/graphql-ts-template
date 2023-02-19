"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
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
    experience: {
        type: Number,
        required: true
    }
}, { versionKey: false });
exports.default = mongoose_1.default.model('Speaker', SpeakerSchema);
