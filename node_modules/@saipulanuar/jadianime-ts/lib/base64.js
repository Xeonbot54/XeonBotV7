"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64 = void 0;
const node_base64_image_1 = require("node-base64-image");
var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const isBase64 = (str) => {
    return str.length % 4 == 0 && /^[A-Za-z0-9+/]+[=]{0,3}$/.test(str);
};
const base64 = async (_url) => {
    return new Promise(async (resolve, reject) => {
        if (_url.indexOf(';base64,') !== -1 || isBase64(_url)) {
            resolve(_url);
        }
        else {
            let options;
            if (_url.indexOf('http') !== -1) {
                options = { string: true };
            }
            else {
                options = { string: true, local: true };
            }
            const image = (0, node_base64_image_1.encode)(_url, options);
            resolve(image);
        }
    });
};
exports.base64 = base64;
