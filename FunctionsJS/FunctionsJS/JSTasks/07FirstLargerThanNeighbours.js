//Problem 7. First larger than neighbours
//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element. Use the function from the previous exercise.
console.log('\n');
console.log('Task 7');
console.log('\n');
function isLarger(array) {
    var arrLength = array.length,
        hope = false,                  //What a name for a variable much original wow such smart ...
        index;
    for (index = 1; index < arrLength - 1; index += 1) {
        if (array[index] > array[index + 1] && array[index] > array[index - 1]) {
            console.log(array.join(' ,'));
            console.log('The first element bigger than its neighbours is ' + array[index]);
            hope = true;
            break;
        }

    }
    if (hope === false) {
        return -1;
    }
}
isLarger([1, 2, 1, 3, 45, 1]);
isLarger([1, 2, 3, 4, 5, 6]);