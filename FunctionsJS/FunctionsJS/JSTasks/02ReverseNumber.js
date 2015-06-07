//Problem 2. Reverse number
//Write a function that reverses the digits of given decimal number.
console.log('\n');
console.log('Task 2');
console.log('\n');
function reverse() {
    var reversed,
        digits = [].slice.apply(arguments);
    reversed = digits.toString().split('').reverse().join('');
    return reversed;

}
console.log('Original number = ' + '54.251' + '--> reversed : ' + reverse(54.251));
console.log('Original number = ' + '1312' + '--> reversed : ' + reverse(1312));