//Problem 3. Min/Max of sequence
//Write a script that finds the max and min number from a sequence of numbers.
console.log("\n");
console.log("Task 3");
console.log("\n");
function minMax(numberSequence) {
    var index,
        symbols = new Array(25);
    numberSequence.sort();
    for (index = 0; index < length; index+=1) {
        console.log('Element:' + index + ' = ' + numberSequence[index]);

    }
    console.log('Min -> ' + numberSequence[0]);
    console.log(symbols.join('='));
    console.log('Max -> ' + numberSequence[numberSequence.length-1]);
    console.log("\n");


}
minMax([23, 13, 1, 5, 7, 8, 9]);
minMax([-123, -3, -4, -6, -1, 0]);
minMax([1231, 62332, 313213, 888678, 8123]);