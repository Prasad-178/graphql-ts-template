"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conn_1 = __importDefault(require("./db/conn"));
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config/environment/config");
conn_1.default.then(() => {
    app_1.default.listen(5500, () => {
        console.log(`🚀  GraphQL server running at port: ${config_1.port}`);
    });
});
