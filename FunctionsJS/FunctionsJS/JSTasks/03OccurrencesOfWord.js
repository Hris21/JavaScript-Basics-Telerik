//Problem 3. Occurrences of word
//Write a function that finds all the occurrences of word in a text. The search can be case sensitive or case insensitive. Use function overloading.
console.log('\n');
console.log('Task 3');
console.log('\n');

var text = 'Three switched witches watch three Swatch watch switches Which switched witch watch which Swatch watch switch?';

function findOccurrences(text, word, caseSensitive) {
    var repeated = 0,
        index;

    if (!caseSensitive) {
        word = word.toLowerCase();
        text = text.toLowerCase();
    }
    while (index !== -1) {
        index = text.indexOf(word, index);

        if (index !== -1) {
            index += 1;
            repeated += 1;
        }
    }
    return repeated;
}
console.log(text);
console.log('\n');
console.log('The word is:"Swatch" ' + 'it is repeated ' + findOccurrences(text, 'Swatch', false) + ' times');
console.log('The word is:"Which" ' + 'it is repeated ' + findOccurrences(text, 'Which', true) + ' times');