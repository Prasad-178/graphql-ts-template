"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
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
}, { versionKey: false });
exports.default = mongoose_1.default.model('Events', EventSchema);
