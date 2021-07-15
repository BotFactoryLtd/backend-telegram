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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const argon2_1 = __importDefault(require("argon2"));
class CryptString {
    crypt(str) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield argon2_1.default.hash(str);
        });
    }
    check(hash, str) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield argon2_1.default.verify(hash, str);
        });
    }
}
module.exports = new CryptString();