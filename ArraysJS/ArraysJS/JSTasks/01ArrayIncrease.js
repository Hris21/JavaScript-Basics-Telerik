//Problem 1. Increase array members
//Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
//Print the obtained array on the console.
console.log("Task 1");
console.log('\n');
function ArrayIncrease() {
    var integerArray, index;
    integerArray = [];

    for (index = 0; index < 20; index += 1) {
        integerArray.push(index * 5);
        console.log(integerArray[index]);
    }
}
ArrayIncrease();