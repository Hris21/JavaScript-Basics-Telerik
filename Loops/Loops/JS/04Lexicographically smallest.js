//Problem 4. Lexicographically smallest
//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.
console.log("\n");
console.log("Task 4");
console.log("\n");
function smallestLargestProp(object) {
    var properties = [],
        property;

    for (property in object) {
        properties.push(property);

    }
    properties.sort();
    console.log(object + ' Smallest: ' + properties[0] + ' Largest: ' + properties[properties.length - 1]);
    console.log(new Array(25).join('='));
}
smallestLargestProp(document);
smallestLargestProp(window);
smallestLargestProp(navigator);