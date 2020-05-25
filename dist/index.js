"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(express_1.default.json({ limit: "50mb", inflate: true }));
app.use(cors_1.default());
app.use("/api", routes_1.default);
app.listen(1111);
