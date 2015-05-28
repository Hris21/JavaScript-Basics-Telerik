//Problem 1. Exchange if greater
//Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
//As a result print the values a and b, separated by a space.
console.log("Task 1");
console.log("\n");
function exchangeGreater(a, b) {
    var c = 0;
    c = b;
    if (a > b) {
        console.log("The first value is greater than the second" + ' a:' + a + ', b:' + b);
        b = a;
        a = c;
        console.log('The exchange would be -> ' + ' a:' + a + ', b:' + b);

    } else {
        console.log("The second value is greater than the first" + ' a:' + a + ', b:' + b);
    }
}
exchangeGreater(5, 2);
console.log("\n");
exchangeGreater(3, 7);
console.log("\n");
exchangeGreater(27, 17);