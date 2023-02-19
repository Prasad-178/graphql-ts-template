"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
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
}, { versionKey: false });
exports.default = mongoose_1.default.model('ApiKey', ApiKeySchema);
