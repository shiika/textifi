declare module textifing {
    export type LangsType = "en" | "ar";
    export enum LANGUAGES {
        EN = "en",
        AR = "ar"
    }
    class TextRepresentation {
        num: number;
        lang: LangsType;
        private config;
        private langsWords;
        constructor(num: number, lang?: LangsType);
        getNumberInText(num?: number): string;
    }
}
