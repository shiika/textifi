import { TextRepresentation } from ".";

const numText: TextRepresentation = new TextRepresentation(195311);
const result: string = numText.numberToEnglishWords();
console.log(result);