//Problem 5. Selection sort
//Sorting an array means to arrange its elements in increasing order. Write a script to sort an array. 
//Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc. Hint: Use a second array
console.log('\n');
console.log('Task 5');
console.log('\n');
function selectionSort(sortMe) {
    var index,
        secondIndex,
        currentNumber,
        temp,
        arrLength;
    for (index = 0, arrLength = sortMe.length; index < arrLength; index += 1) {

        currentNumber = index;

        for (secondIndex = index + 1; secondIndex < arrLength; secondIndex += 1) {
            if (sortMe[secondIndex] < sortMe[currentNumber]) {
                currentNumber = secondIndex;
            }


        }
        if (currentNumber !== index) {
            temp = sortMe[index];
            sortMe[index] = sortMe[currentNumber];
            sortMe[currentNumber] = temp;
        }
    }
    console.log('The Array after the sorting :  ' + sortMe.join(' ,'));

}
selectionSort([3, 4, 5, 2, 1]);
selectionSort([5, 9, 6, 7, 8]);