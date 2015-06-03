//Problem 7. Binary search
//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
console.log('\n');
console.log('Task 7');
console.log('\n');
var integers = [1, 3, 6, 10, 14, 15, 18, 20, 25, 33, 36, 40, 43, 44, 48, 50];
//I assume that the array is already sorted for us.

function binarySearch(integers, element) {
    var beginning = 0,
        end = integers.length,
        target;

    integers.sort();
    while (true) {
        target = ((beginning + end) >> 1);
        if ((target === end || target === beginning) && integers[target] !== element) {
            return -1;
        }
        if (integers[target] > element) {
            end = target;
        } else if (integers[target] < element) {
            beginning = target;
        } else {
            return target;
        }
    }
}
console.log(binarySearch(integers, 3));