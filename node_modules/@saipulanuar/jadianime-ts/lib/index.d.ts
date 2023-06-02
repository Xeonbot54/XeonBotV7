type opts = {
    qqmode?: string;
    proxy?: string;
};
export declare const JadiAnime: (img: string, opts?: opts | undefined) => Promise<{
    code: number;
    error: string;
    img?: undefined;
    videoUrl?: undefined;
    singleImg?: undefined;
} | {
    code: number;
    img: string;
    videoUrl: string | undefined;
    singleImg: string | undefined;
    error?: undefined;
}>;
export {};
