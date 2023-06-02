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
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = require("fs");
const util_1 = require("util");
const read = util_1.promisify(fs_1.readFile);
const write = util_1.promisify(fs_1.writeFile);
function encode(url, opts = { string: false }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!url || url === '') {
                return Promise.reject(new Error('URL is a required parameter'));
            }
            if (opts.local) {
                const fileBuf = yield read(url);
                return opts.string ? fileBuf.toString('base64') : fileBuf;
            }
            const { data, status } = yield axios_1.default(url, {
                responseType: 'arraybuffer',
                headers: opts.headers,
            });
            if (data && status >= 200 && status < 302) {
                const buf = Buffer.from(data, 'base64');
                return opts.string ? buf.toString('base64') : buf;
            }
            return Promise.reject(new Error('empty body and/or wrong status code'));
        }
        catch (err) {
            if (err) {
                return Promise.reject(err);
            }
            return Promise.reject(new Error('unknown error in encode'));
        }
    });
}
exports.encode = encode;
function decode(imgBuffer, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!imgBuffer || imgBuffer === '' || !opts.fname || !opts.ext) {
                return Promise.reject(new Error('image buffer, filename and extension are required parameters'));
            }
            if (typeof imgBuffer === 'string') {
                imgBuffer = Buffer.from(imgBuffer, 'base64');
            }
            yield write(`${opts.fname}.${opts.ext}`, imgBuffer, 'base64');
            return 'file written successfully to disk';
        }
        catch (err) {
            if (err) {
                return Promise.reject(err);
            }
            return Promise.reject(new Error('unknown error in decode'));
        }
    });
}
exports.decode = decode;
//# sourceMappingURL=index.js.map