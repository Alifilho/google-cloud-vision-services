"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("./config/multer"));
var Base64Controller_1 = __importDefault(require("./controllers/Base64Controller"));
var ImageController_1 = __importDefault(require("./controllers/ImageController"));
var routes = express_1.Router();
routes.post("/base64", Base64Controller_1.default.store);
routes.post("/image", multer_1.default.single("image"), ImageController_1.default.store);
exports.default = routes;
