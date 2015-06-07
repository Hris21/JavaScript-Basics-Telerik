//Problem 6. Larger than neighbours
//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).
console.log('\n');
console.log('Task 6');
console.log('\n');
function isBigger(givenPosition, integerArray) {
    var arrayLength = integerArray.length;

    if (givenPosition < arrayLength && givenPosition >= 0) {
        if (givenPosition === arrayLength - 1 || givenPosition === 0) {

            console.log('The element in the given position has only 1 neighbour.');

        }
        else {
            if (integerArray[givenPosition] > integerArray[givenPosition - 1] && integerArray[givenPosition] > integerArray[givenPosition + 1]) {
                console.log('The element at given position is bigger than it`s neighbours.');
            } else {
                console.log('The element at given position is not bigger than it`s neighbours.');
            }
        }
    } else {
        console.log('The position given is outside the array');
    }

}
isBigger(1, [3, 4, 1]);
isBigger(7, [3, 4, 5, 1, 6, 7, 6, 1]);
isBigger(5, [1, 2, 3]);