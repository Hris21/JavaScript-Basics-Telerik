//Problem 7. The biggest of five numbers
//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.
console.log("\n");
console.log("Task 7");
console.log("\n");
function biggestOfFive(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c + ', d: ' + d + ', e: ' + e);
        console.log('"a" is the biggest with vale: ' + a);
        console.log('===================================');
    } else if (b > a && b > c && b > d && b > e) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c + ', d: ' + d + ', e: ' + e);
        console.log('"b" is the biggest with vale: ' + b);
        console.log('===================================');
    } else if (c > a && c > b && c > d && c > e) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c + ', d: ' + d + ', e: ' + e);
        console.log('"c" is the biggest with vale: ' + c);
        console.log('===================================');
    } else if (d > a && d > b && d > c && d > e) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c + ', d: ' + d + ', e: ' + e);
        console.log('"d" is the biggest with vale: ' + d);
        console.log('===================================');
    } else if (e > a && e > b && e > c && e > d) {
        console.log("The numbers are: a: " + a + ', b: ' + b + ', c: ' + c + ', d: ' + d + ', e: ' + e);
        console.log('"e" is the biggest with vale: ' + e);
        console.log('===================================');
    }
}
biggestOfFive(1, 2, 3, 4, 5);
biggestOfFive(5, 7, 1, 8, 3);
biggestOfFive(44, 33, 77, 3, 1);
biggestOfFive(31, 69, 3, 6, 4);