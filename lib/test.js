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
Object.defineProperty(exports, "__esModule", { value: true });
const larksuit_bot_1 = require("./utils/larksuit-bot");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const timestamp = String(Math.floor(Date.now() / 1000) + 100);
        const botLark = new larksuit_bot_1.LarkSuitAlert({
            webHookUrl: "",
            secretKey: "",
            timestamp: timestamp,
        });
        const res = yield botLark.sendMessage("ApiGateway", "Error", "");
        console.log(res.data);
    });
}
// Call the main function
main();
