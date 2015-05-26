//Problem 1. Odd or Even
//Write an expression that checks if given integer is odd or even.
console.log("Task 1");
console.log("\n");
function oddOrEven(integer) {
    if (isNaN(integer)) {
        console.log(integer + " is not a number!");
    } else if (integer % 2 === 0) {
        console.log(integer + " is even -> " + " false ");
    } else {
        console.log(integer + " is odd -> " + " true ");
    }

}
oddOrEven(56);
oddOrEven(80);
oddOrEven(13);
oddOrEven("JavaScript");
//Problem 2. Divisible by 7 and 5
//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
console.log("\n");
console.log("Task 2 ");
console.log("\n");
function DivisibleSevenFive(integer) {
    if (isNaN(integer)) {
        console.log(integer + " is not a number!");
    } else if (integer % 7 === 0 && integer % 5 === 0) {
        console.log(integer + " can be divided by 7 and 5.")
    } else {
        console.log(integer + " is not divisible by 7 AND 5.")
    }
}
DivisibleSevenFive(35);
DivisibleSevenFive(71);
DivisibleSevenFive(7);
DivisibleSevenFive("Word");
//Problem 3. Rectangle area
//Write an expression that calculates rectangle’s area by given width and height.
console.log("\n");
console.log("Task 3 ");
console.log("\n");
function rectangleArea(height, width) {
    var area = height * width;
    console.log("The area of the rectangle is : " + area);
}
rectangleArea(5, 6);
rectangleArea(3, 7);
rectangleArea(5, 5);
rectangleArea(2.5, 3);
//Problem 4. Third digit
//Write an expression that checks for given integer if its third digit (right-to-left) is 7.
console.log("\n");
console.log("Task 4 ");
console.log("\n");
function thirdDigit(number) {
    var isSeven = Math.floor(((number / 10) / 10) % 10);
    if (isSeven === 7) {
        console.log(number + " -> The third digit is seven");
    } else {
        console.log(number + " -> The third digit is not seven");
    }
}
thirdDigit(777);
thirdDigit(1366);
//Problem 5. Third bit
//Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
//The bits are counted from right to left, starting from bit #0.
//The result of the expression should be either 1 or 0.
console.log("\n");
console.log("Task 5 ");
console.log("\n");
function checkThirdBit(number) {
    return (number >> 3) & 1;
}
console.log("7: " + checkThirdBit(7));
console.log("0: " + checkThirdBit(0));
console.log("33: " + checkThirdBit(33));
//Problem 6. Point in Circle
//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius
//    Examples:
console.log("\n");
console.log("Task 6 ");
console.log("\n");
function pointInCircle(x, y, radius) {

    if ((x * x) + (y * y) < (radius * radius)) {
        console.log("The point is inside the cirlce, it's coordinates are ->" + "+X:" + x + " Y:" + y);
    } else {
        console.log("The point is OUTside the cirlce, it's coordinates are ->" + "X:" + x + " Y:" + y);
    }
}
pointInCircle(5, 3, 5);
pointInCircle(3, 7, 5);
pointInCircle(7, 2, 5);
console.log("\n");
console.log("Task 7 ");
console.log("\n");
//Problem 7. Is prime
//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.
function isPrime(number) {
    var divider,
        successCounter = 0;
    for (divider = 0; divider <= number; divider += 1) {
        if (number % divider === 0) {
            successCounter += 1;
        }
    }
    if (successCounter === 2) {
        console.log(number + ' is prime !')
    } else {
        console.log(number + ' is not prime.')
    }

}
isPrime(5);
isPrime(7);
isPrime(25);
console.log("\n");
console.log("Task 8 ");
console.log("\n");
//  Problem 8. Trapezoid area
//  Write an expression that calculates trapezoid's area by given sides a and b and height h.
function calculateTrapezoidArea(a, b, h) {
    if (isNaN(a) || isNaN(b) || isNaN(h)) {
        console.log('The parameters must be numbers !')
    } else {
        console.log("a = " + a + ", b = " + b + ", h = " + h + ", The area is : " + ((a + b) / 2) * h);
    }
}
calculateTrapezoidArea(3, 7, 6);
calculateTrapezoidArea(3, 2, 1);
calculateTrapezoidArea(21, 22, 2)
console.log("\n");
console.log("Task 9 ");
console.log("\n");
// Problem 9. Point in Circle and outside Rectangle
// Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).
function inCircleOutRectangle(x, y) {
    var isInCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 3 * 3;
    var isOutOfRectangle = !((x >= -1 && x <= -1 + 6) && (y <= 1 && y >= 1 - 2));
    return isInCircle && isOutOfRectangle;
}
console.log("The point with coordinates : " + "X: 7" + " Y: 6" + "is inside the circle and outside the ractangle -> " + inCircleOutRectangle(7, 6));
console.log("The point with coordinates : " + "X: 2" + " Y: 2" + "is inside the circle and outside the ractangle -> " + inCircleOutRectangle(2, 2));
console.log("The point with coordinates : " + "X: 2.5	" + " Y:1.5" + "is inside the circle and outside the ractangle -> " + inCircleOutRectangle(2.5, 1.5));

