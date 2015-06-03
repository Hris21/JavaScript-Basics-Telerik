//Problem 3. Maximal sequence
//Write a script that finds the maximal sequence of equal elements in an array. Example:
console.log('\n');
console.log('Task 3');
console.log('\n');
function maxSequence(daVinciCode) {
    var index,
        currentEqual = 1,
        maxEqual = 1,
        indexStart = 0,
        indexEnd = 0,
        arrLength;

    for (index = 0, arrLength = daVinciCode.length; index < arrLength; index += 1) {
        if (daVinciCode[index] === daVinciCode[index + 1]) { //2, 1, 1, 2, 3, 3, 2, 2, 2, 1
            currentEqual += 1;
        } else {
            if (maxEqual < currentEqual) {
                maxEqual = currentEqual;
                indexStart = index - maxEqual + 1;
                indexEnd = indexStart + maxEqual;
            }
            currentEqual = 1;
        }

    }
    console.log('The Array -- > ' + (daVinciCode.join(' ,')));
    console.log(daVinciCode.slice(indexStart, indexEnd) + ' is the maximal sequence of equal elements in the array, the number is repeated ' + maxEqual + ' times');


}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);