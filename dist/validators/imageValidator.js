"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var imageSchema = (_a = {},
    _a[celebrate_1.Segments.BODY] = celebrate_1.Joi.object().keys({
        key: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
    }),
    _a[celebrate_1.Segments.HEADERS] = celebrate_1.Joi.object({
        type: celebrate_1.Joi.string().min(13).max(21).required(),
    }),
    _a);
exports.default = imageSchema;
