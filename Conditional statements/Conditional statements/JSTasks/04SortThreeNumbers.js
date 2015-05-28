//Problem 4. Sort 3 numbers
//Sort 3 real values in descending order.
//Use nested if statements.
console.log("\n");
console.log("Task 4");
console.log("\n");
function sortThreeNumbers(a, b, c) {
    if (a >= b && a >= c) {
        if (b >= c) {
            console.log('a: ' + a + ' b: ' + b + ' c: ' + c);
        } else {
            console.log('a: ' + a + ' c: ' + c + ' b: ' + b);
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            console.log('b: ' + b + ' a: ' + a + ' c: ' + c);
        } else {
            console.log('b: ' + b + ' c: ' + c + ' a: ' + a);
        }
    } else {
        if (a >= b) {
            console.log('c: ' + c + ' a: ' + a + ' b: ' + b);
        } else {
            console.log('c: ' + c + ' b: ' + b + ' a: ' + a);
        }
    }
}
sortThreeNumbers(5, 1, 2);
sortThreeNumbers(-2, 5, -10);
sortThreeNumbers(100, 200, 300);