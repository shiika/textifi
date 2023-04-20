import { LangsType, langsWords } from "./langs";
export class TextRepresentation {
    private config: any;
    constructor(public num: number, public lang: LangsType = "en") {
        this.config = langsWords[lang];
    }

    numberToEnglishWords(num: number = this.num): string {
        if (num === 0) return this.config.zero;
        if (num < 0) return this.config.minus + " " + this.numberToEnglishWords(Math.abs(num));
        
        let words = '';
        if (num >= 1000000) {
          words += this.numberToEnglishWords(Math.floor(num / 1000000)) + ` ${this.config.million} `;
          num %= 1000000;
        }
        if (num >= 1000) {
          words += this.numberToEnglishWords(Math.floor(num / 1000)) + ` ${this.config.thousand} `;
          num %= 1000;
        }
        if (num >= 100) {
          words += this.numberToEnglishWords(Math.floor(num / 100)) + ` ${this.config.hundred} `;
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