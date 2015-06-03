//Problem 6. Most frequent numberS
//Write a script that finds the most frequent number in an array. 
console.log('\n');
console.log('Task 6');
console.log('\n');
function mostFrequent(parrotArray) { // 4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3
    var index,
        secondIndex,
        currentElement,
        repeatedElement,
        matches = 1,
        maxMatches = 1,
        arrayLength = parrotArray.length;

    for (index = 0; index < arrayLength; index += 1) {
        currentElement = index;
        for (secondIndex = index + 1; secondIndex < arrayLength; secondIndex += 1) {
            if (parrotArray[index] === parrotArray[secondIndex]) {
                matches += 1;
            }

        }
        if (maxMatches < matches) {
            maxMatches = matches;
            repeatedElement = parrotArray[index];
        }
        matches = 1;
    }

    console.log('The most repeated element is : ' + repeatedElement + ' ,' + maxMatches + ' times');

}
mostFrequent([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
