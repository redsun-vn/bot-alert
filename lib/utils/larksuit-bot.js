"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarkSuitAlert = void 0;
const crypto = __importStar(require("crypto"));
const axios_1 = __importDefault(require("axios"));
const enums_1 = require("../enums");
class LarkSuitAlert {
    constructor({ webHookUrl, secretKey, timestamp, }) {
        this._webHookUrl = webHookUrl;
        this._secretKey = secretKey;
        this._timestamp = timestamp || null;
    }
    genSignature() {
        // Step 1: Concatenate timestamp and secret
        const dataToSign = this._timestamp + "\n" + this._secretKey;
        // Step 2: Create HMAC using SHA-256
        const hmac = crypto.createHmac(enums_1.HashAlgorithm.SHA256, this._secretKey);
        // Step 3: Update HMAC with the data to sign
        hmac.update(dataToSign);
        // Step 4: Generate the signature and encode it in Base64
        return hmac.digest("base64");
    }
    sendMessage(serviceName, message, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return axios_1.default.post(this._webHookUrl, {
                    timestamp: this._timestamp,
                    msg_type: "text",
                    content: {
                        text: `${serviceName}` + (topic || "") + message,
                    },
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    sendMessageError(serviceName, message, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return axios_1.default.post(this._webHookUrl, {
                    msg_type: "interactive",
                    card: {
                        elements: [
                            {
                                tag: "div",
                                text: {
                                    content: `${topic + ":" || ""} ${message}`,
                                    tag: "lark_md",
                                },
                            },
                        ],
                        header: {
                            title: {
                                content: `[ERROR]: ${serviceName}`,
                                tag: "plain_text",
                            },
                        },
                    },
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.LarkSuitAlert = LarkSuitAlert;
