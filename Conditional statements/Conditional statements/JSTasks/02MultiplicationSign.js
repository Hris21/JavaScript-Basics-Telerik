//Problem 2. Multiplication Sign
//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.
console.log("\n");
console.log("Task 2");
console.log("\n");
function tellMeTheSign(numberOne, numberTwo, numberThree) {
    if (numberOne > 0 && numberTwo > 0 && numberThree > 0) {
        console.log(numberOne + " * " + numberTwo + " * " + numberThree + " -> +");
    } else if (numberOne === 0 || numberTwo === 0 || numberThree === 0) {
        console.log(numberOne + " * " + numberTwo + " * " + numberThree + " -> 0");
    } else {
        console.log(numberOne + " * " + numberTwo + " * " + numberThree + " -> -");
    }

}
tellMeTheSign(5,2,2);
tellMeTheSign(0,3,1);
tellMeTheSign(-7,5,4);