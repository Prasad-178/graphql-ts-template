"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
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
}, { versionKey: false });
exports.default = mongoose_1.default.model('Request', RequestSchema);
