export declare type LangsType = "en" | "ar";
export declare enum LANGUAGES {
    EN = "en",
    AR = "ar"
}
export declare const langsWords: any;
export declare class TextRepresentation {
    num: number;
    lang: LangsType;
    private config;
    constructor(num: number, lang?: LangsType);
    numberToEnglishWords(num?: number): string;
}
