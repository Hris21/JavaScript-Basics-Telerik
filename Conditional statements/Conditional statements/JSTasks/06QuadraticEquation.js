//Problem 6. Quadratic equation
//Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
//Calculates and prints its real roots.
console.log("\n");
console.log("Task 6");
console.log("\n");
function quadricEquation(a, b, c) {
    var discriminant = ((b * b) - (4 * a * c)),
        xOne,
        xTwo;
    if (discriminant < 0) {
        console.log('No real roots');
    }
    else if (discriminant > 0) {
        xOne = ((-b) + Math.sqrt(discriminant)) / 2 * a,
        xTwo = ((-b) - Math.sqrt(discriminant)) / 2 * a;
        console.log('Roots -> ' + 'x1= ' + xOne + ', x2= ' + xTwo);
    }
    else if (discriminant === 0) {
        xOne = -b / 2 * a;
        console.log('Discriminant is 0 --> only 1 root : ' + xOne);

    }
}
quadricEquation(-1, 3, 0);
quadricEquation(2, 5, -3);
quadricEquation(5, 2, 8);