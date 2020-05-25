"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("../services/api"));
exports.default = {
    store: function (req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, key, email, type, client, result, result, result, result, result, result, result, result;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = req.body, key = _c.key, email = _c.email;
                        type = req.headers.type;
                        return [4 /*yield*/, api_1.default(key, email)];
                    case 1:
                        client = _d.sent();
                        if (!(type === "TEXT_DETECTION")) return [3 /*break*/, 3];
                        return [4 /*yield*/, client.textDetection(req.file.buffer)];
                    case 2:
                        result = (_d.sent())[0];
                        res.json({ detections: result.textAnnotations }).status(200);
                        _d.label = 3;
                    case 3:
                        if (!(type === "FACE_DETECTION")) return [3 /*break*/, 5];
                        return [4 /*yield*/, client.faceDetection(req.file.buffer)];
                    case 4:
                        result = (_d.sent())[0];
                        res.json({ detections: result.textAnnotations }).status(200);
                        _d.label = 5;
                    case 5:
                        if (!(type === "IMAGE_PROPERTIES")) return [3 /*break*/, 7];
                        return [4 /*yield*/, client.imageProperties(req.file.buffer)];
                    case 6:
                        result = (_d.sent())[0];
                        res
                            .json({
                            detections: (_b = (_a = result.imagePropertiesAnnotation) === null || _a === void 0 ? void 0 : _a.dominantColors) === null || _b === void 0 ? void 0 : _b.colors,
                        })
                            .status(200);
                        _d.label = 7;
                    case 7:
                        if (!(type === "LABEL_DETECTION")) return [3 /*break*/, 9];
                        return [4 /*yield*/, client.labelDetection(req.file.buffer)];
                    case 8:
                        result = (_d.sent())[0];
                        res.json({ detections: result.labelAnnotations }).status(200);
                        _d.label = 9;
                    case 9:
                        if (!(type === "LANDMARK_DETECTION")) return [3 /*break*/, 11];
                        return [4 /*yield*/, client.landmarkDetection(req.file.buffer)];
                    case 10:
                        result = (_d.sent())[0];
                        res.json({ detections: result.landmarkAnnotations }).status(200);
                        _d.label = 11;
                    case 11:
                        if (!(type === "LOGO_DETECTION")) return [3 /*break*/, 13];
                        return [4 /*yield*/, client.logoDetection(req.file.buffer)];
                    case 12:
                        result = (_d.sent())[0];
                        res.json({ detections: result.logoAnnotations }).status(200);
                        _d.label = 13;
                    case 13:
                        if (!(type === "SAFE_SEARCH_DETECTION")) return [3 /*break*/, 15];
                        return [4 /*yield*/, client.safeSearchDetection(req.file.buffer)];
                    case 14:
                        result = (_d.sent())[0];
                        res.json({ detections: result.safeSearchAnnotation }).status(200);
                        _d.label = 15;
                    case 15:
                        if (!(type === "WEB_DETECTION")) return [3 /*break*/, 17];
                        return [4 /*yield*/, client.webDetection(req.file.buffer)];
                    case 16:
                        result = (_d.sent())[0];
                        res.json({ detections: result.webDetection }).status(200);
                        _d.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    },
};
