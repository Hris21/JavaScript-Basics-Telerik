//Problem 5. Appearance count
//Write a function that counts how many times given number appears in given array. Write a test function to check if the function is working correctly.
console.log('\n');
console.log('Task 5');
console.log('\n');
function seeIfRepeat(number, parrotArray) {
    var index,
        secondIndex,
        currentElement,
        timesRepeated = 0,
        arrayLength = parrotArray.length;

    for (index = 0; index < arrayLength; index += 1) {
        if (parrotArray[index] === number) {
            timesRepeated += 1;
        }
    }

    if (timesRepeated > 1) {
        console.log('The Array: ' + parrotArray.join(' '));
        console.log('<-----------.----------->');
        console.log('The given number >> ' + number + ' appears: ' + timesRepeated + ' times.');
        console.log('\n');

    } else if (timesRepeated === 1) {
        console.log('The Array: ' + parrotArray.join(' '));
        console.log('<-----------.----------->');
        console.log('The given number >> ' + number + ' appears ' + timesRepeated + ' time.');
        console.log('\n');

    } else if (timesRepeated === 0) {
        console.log('The Array: ' + parrotArray.join(' '));
        console.log('<-----------.----------->');
        console.log('The given number is not present in the Array!');
        console.log('\n');
    }

}
seeIfRepeat(3, [6, 1, 3, 7, 3, 34, 4, 62, 34, 234, 954, 3]);
seeIfRepeat(11, [123, 3, 32, 6, 45, 47, 48, 479, 324, 1, 2, 11]);
seeIfRepeat(27, [6, 1, 3, 7, 3, 34, 4, 62, 34, 234, 954, 3]);
