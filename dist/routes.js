"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var multer_1 = __importDefault(require("./config/multer"));
var base64Validator_1 = __importDefault(require("./validators/base64Validator"));
var imageValidator_1 = __importDefault(require("./validators/imageValidator"));
var Base64Controller_1 = __importDefault(require("./controllers/Base64Controller"));
var ImageController_1 = __importDefault(require("./controllers/ImageController"));
var routes = express_1.Router();
routes.post("/base64", celebrate_1.celebrate(base64Validator_1.default), Base64Controller_1.default.store);
routes.post("/image", multer_1.default.single("image"), celebrate_1.celebrate(imageValidator_1.default), ImageController_1.default.store);
exports.default = routes;
