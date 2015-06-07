//Problem 1. English digit
//Write a function that returns the last digit of given integer as an English word.
console.log('Task 1');
console.log('\n');
function lastAsWord() {
    var lastDigit,
        digits,
        digit,
        lastDigitPos;


    digit = [].slice.apply(arguments);
    digits = digit.toString();
    lastDigitPos = digits.length - 1;
    lastDigit = digits.charAt(lastDigitPos);
    lastDigit = lastDigit | 0;

    switch (lastDigit) {
        case 1: console.log('one'); break;
        case 2: console.log('two'); break;
        case 3: console.log('three'); break;
        case 4: console.log('four'); break;
        case 5: console.log('five'); break;
        case 6: console.log('six'); break;
        case 7: console.log('seven'); break;
        case 8: console.log('eight'); break;
        case 9: console.log('nine'); break;
        case 0: console.log('zero'); break;
        default: console.log('“not a digit”'); break;
    }
}
lastAsWord(512);
lastAsWord('string to check validation');
lastAsWord(14767);