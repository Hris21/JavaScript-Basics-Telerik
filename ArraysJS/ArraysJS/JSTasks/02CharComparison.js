//Problem 2. Lexicographically comparison.
//Write a script that compares two char arrays lexicographically (letter by letter).
console.log('\n');
console.log("Task 2");
function charComparison(charArrayOne, charArrayTwo) {
    var index;
    if (charArrayOne.length === charArrayTwo.length) {
        console.log('\n');
        console.log('The arrays are the same length');

        for (index = 0; index < charArrayOne.length; index += 1) {
            if (charArrayOne[index] === charArrayTwo[index]) {
                console.log('First Array element = ' + charArrayOne[index] + ' Second Array element = ' + charArrayTwo[index]);

            }
            else {
                console.log('A difference in elements --> ' + 'First Array element = ' + charArrayOne[index] + ' Second Array element = ' + charArrayTwo[index]);
                break;
            }
        }
    }
    else {
        console.log('\n');
        console.log('The arrays are not the same length, thus they are NOT equal!');
    }

}

charComparison(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']);
charComparison(['a', 'b', 'c', 'd', 'e', 'f', 'g'], ['a', 'b', 'c', 'd']);
charComparison(['a', 'b', 'z', 'd'], ['a', 'b', 'x', 'd']);