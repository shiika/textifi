export type LangsType = "en" | "ar";
export enum LANGUAGES {
    EN = "en",
    AR = "ar"
}

export const langsWords: any = {
    en: {
        units: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        teens: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens: ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        zeroWord: "zero",
        minusWord: "minus",
        onlyWord: "only",
        hundred: "hundred",
        million: "million",
        thousand: "thousand",
    },
}
export class TextRepresentation {
    private config: any;
    private langsWords: any = langsWords;
    constructor(public num: number, public lang: LangsType = "en") {
        this.config = this.langsWords[lang];
    }

    getNumberInText(num: number = this.num): string {
        if (num === 0) return this.config.zero;
        if (num < 0) return this.config.minus + " " + this.getNumberInText(Math.abs(num));
        
        let words = '';
        if (num >= 1000000) {
          words += this.getNumberInText(Math.floor(num / 1000000)) + ` ${this.config.million} `;
          num %= 1000000;
        }
        if (num >= 1000) {
          words += this.getNumberInText(Math.floor(num / 1000)) + ` ${this.config.thousand} `;
          num %= 1000;
        }
        if (num >= 100) {
          words += this.getNumberInText(Math.floor(num / 100)) + ` ${this.config.hundred} `;
          num %= 100;
        }
        if (num >= 11 && num <= 19) {
          words += this.config.teens[num - 11] + ' ';
          num = 0;
        } else if (num === 10 || num >= 20) {
          words += this.config.tens[Math.floor(num / 10)] + ' ';
          num %= 10;
        }
        if (num >= 1 && num <= 9) {
          words += this.config.units[num] + ' ';
        }
        
        return words.trim();
    }

}