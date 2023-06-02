"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JadiAnime = void 0;
const md5_1 = __importDefault(require("md5"));
const uuid_1 = require("uuid");
const axios_1 = __importDefault(require("axios"));
const async_retry_1 = __importDefault(require("async-retry"));
const base64_1 = require("./base64");
const https_proxy_agent_1 = require("https-proxy-agent");
const socks_proxy_agent_1 = require("socks-proxy-agent");
const signV1 = (obj) => {
    const str = JSON.stringify(obj);
    return (0, md5_1.default)('https://h5.tu.qq.com' +
        (str.length + (encodeURIComponent(str).match(/%[89ABab]/g)?.length || 0)) +
        'HQ31X02e');
};
const JadiAnime = async (img, opts) => {
    let httpsAgent;
    if (opts?.proxy?.toLowerCase().includes("socks5")) {
        httpsAgent = new socks_proxy_agent_1.SocksProxyAgent(opts.proxy);
        httpsAgent.timeout = 30000;
    }
    else if (opts?.proxy?.toLowerCase().includes("https")) {
        httpsAgent = new https_proxy_agent_1.HttpsProxyAgent(opts.proxy);
        httpsAgent.timeout = 30000;
    }
    else if (opts?.proxy) {
        return {
            code: 4041,
            error: "proxy error, use socks5 or https"
        };
    }
    let qqmode = opts?.qqmode ? opts?.qqmode?.toLowerCase() : 'world';
    if (qqmode !== 'world' && qqmode !== 'china')
        return {
            code: 4042,
            error: "QQ Mode not Found, use WORLD or CHINA only"
        };
    const imgData = await (0, base64_1.base64)(img);
    const obj = {
        busiId: qqmode === 'china' ? 'ai_painting_anime_entry' : 'different_dimension_me_img_entry',
        extra: JSON.stringify({
            face_rects: [],
            version: 2,
            platform: 'web',
            data_report: {
                parent_trace_id: (0, uuid_1.v4)(),
                root_channel: '',
                level: 0,
            },
        }),
        images: [imgData],
    };
    const sign = signV1(obj);
    let extra;
    try {
        extra = await (0, async_retry_1.default)(async (bail) => {
            const response = await axios_1.default.request({
                method: 'POST',
                url: 'https://ai.tu.qq.com/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process',
                data: obj,
                httpsAgent,
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'https://h5.tu.qq.com',
                    'Referer': 'https://h5.tu.qq.com/',
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                    'x-sign-value': sign,
                    'x-sign-version': 'v1',
                },
                timeout: 30000,
            });
            const data = response?.data;
            if (!data) {
                throw new Error('No data');
            }
            if (data.msg === 'VOLUMN_LIMIT') {
                throw new Error('Server Sedang Sibuk');
            }
            if (data.msg === 'IMG_ILLEGAL') {
                bail(new Error('Gambar ini melanggar aturan!'));
                return;
            }
            if (data.code === 1001) {
                bail(new Error('Mukanya mana?'));
                return;
            }
            if (data.code === -2100) { // request image is invalid
                bail(new Error('Coba foto lain'));
                return;
            }
            if (data.code === 2119 || // user_ip_country
                data.code === -2111 // AUTH_FAILED
            ) {
                bail(new Error("QQ block your region/ip"));
                return;
            }
            if (!data.extra) {
                throw new Error('Gagal mengkonversi ' + JSON.stringify(data));
            }
            return JSON.parse(data.extra);
        }, {
            onRetry(e, attempt) {
                console.error(`Upload Gagal (Percobaan ke #${attempt}): ${e.toString()}`);
            },
            retries: 100,
            factor: 1,
        });
    }
    catch (e) {
        console.error(`Konversi gagal: ${e.toString()}`);
        throw new Error(`Konversi Gagal: ${e.toString()}`);
    }
    return {
        code: 200,
        img: extra.img_urls[1],
        videoUrl: qqmode === 'china' ? extra.video_urls[0] : undefined,
        singleImg: qqmode === 'china' ? extra.img_urls[2] : undefined,
    };
};
exports.JadiAnime = JadiAnime;
