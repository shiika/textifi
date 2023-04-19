function numberToWords(num) {
    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (num === 0)
        return 'zero';
    if (num < 0)
        return 'minus ' + numberToWords(Math.abs(num));
    var words = '';
    if (num >= 1000000) {
        words += numberToWords(Math.floor(num / 1000000)) + ' million ';
        num %= 1000000;
    }
    if (num >= 1000) {
        words += numberToWords(Math.floor(num / 1000)) + ' thousand ';
        num %= 1000;
    }
    if (num >= 100) {
        words += numberToWords(Math.floor(num / 100)) + ' hundred ';
        num %= 100;
    }
    if (num >= 11 && num <= 19) {
        words += teens[num - 11] + ' ';
        num = 0;
    }
    else if (num === 10 || num >= 20) {
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
    }
    if (num >= 1 && num <= 9) {
        words += units[num] + ' ';
    }
    return words.trim();
}
console.log(numberToWords(1000));
