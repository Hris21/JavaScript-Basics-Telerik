//01.Assign all the possible JavaScript literals to different variables.
//02 Quoted text ,Create a string variable with quoted text in it.
//03.Try typeof on all variables you created
//04.Create null, undefined variables and try typeof on them.
//01
var intLit = 5,
    floatLlit = 3.14,
    stringLit = "pesho",
    boolLit = "true",
    objectLit = { name: "batman", type: "super hero", powerLevel: 9001 },
    arrayLit = ["VW",
            "BMW",
            "Audi"],
//02
quoteString = 'Something that must be "quoted" ';

//03
function varTypes() {
    console.log("5 is: " + typeof (intLit));
    console.log("3.14 is: " + typeof (floatLlit));
    console.log("'pesho' is: " + typeof (stringLit));
    console.log("'true' is: " + typeof (boolLit));
    console.log(objectLit + " is: " + typeof (objectLit));
    console.log(arrayLit[0] + " ," + arrayLit[2] + " ," + arrayLit[3] + " is: " + typeof (arrayLit));
    console.log("The quoted string: " + quoteString + typeof (quoteString));
}
//04
function undefinedNull() {
    var blackHole = null,
    emptyHole = undefined;

    console.log("Variable blackHole(null) is:" + typeof blackHole);
    console.log("Variable emptyHole(undefined) is:" + typeof emptyHole)
}



