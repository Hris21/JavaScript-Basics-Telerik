//Problem 4. Maximal increasing sequence
//Write a script that finds the maximal increasing sequence in an array. 
console.log('\n');
console.log('Task 4');
console.log('\n');
function increasingSequence(ordinaryArray) {
    var index,
        arrLength,
        startIndex,
        sequenceLength = 0,
        maxLength = 0,
        endIndex;

    for (index = 0, arrLength = ordinaryArray.length; index < arrLength; index += 1) {
        if ((ordinaryArray[index] + 1 === ordinaryArray[index + 1]) || ordinaryArray[index] > ordinaryArray[index + 1] + 1) { //3, 2, 3, 4, 2, 2, 4
            sequenceLength += 1;
        } else {
            if (maxLength < sequenceLength) {
                maxLength = sequenceLength;
                startIndex = index - maxLength + 1;
                endIndex = startIndex + maxLength - 1;
            }
            sequenceLength = 1;
        }

    }
    console.log('The sequence is --> ' + ordinaryArray.join(' ,'));
    console.log('The longest sequence is : ' + ordinaryArray.slice(startIndex, endIndex) + ' with number of : ' + (maxLength - 1) + ', elements.');

}
increasingSequence([3, 2, 3, 4, 2, 2, 4]);