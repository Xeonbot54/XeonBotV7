/// <reference types="node" />
export interface EncodeOptions {
    string?: boolean;
    local?: boolean;
    headers?: {
        [key: string]: string | number;
    };
}
export interface DecodeOptions {
    fname: string;
    ext: string;
}
export declare function encode(url: string, opts?: EncodeOptions): Promise<string | Buffer>;
export declare function decode(imgBuffer: string | Buffer, opts: Required<DecodeOptions>): Promise<string>;
