//Problem 3. The biggest of Three
//Write a script that finds the biggest of three numbers.
//Use nested if statements.
console.log("\n");
console.log("Task 3");
console.log("\n");
function biggestOfThree(a, b, c) {
    var biggest;
    if (a > b && a > c) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c);
        console.log('"a" is the biggest with vale: ' + a);
        console.log('===================================')

    } else if (b > a && b > c) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c);
        console.log('"b" is the biggest with vale: ' + b);
        console.log('===================================')

    }
    else if (c > a && c > b) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c);
        console.log('"c" is the biggest with vale: ' + c);
        console.log('===================================');

    }
}
biggestOfThree(5, 2, 2);
biggestOfThree(5, 7, 3);
biggestOfThree(3, 4, 33);