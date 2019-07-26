// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Alex"));
console.log(echo(123));
console.log(echo({ name: "Alex", age: 123 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Alex"));
console.log(betterEcho(123));
// console.log(betterEcho<number>(123)); to infer the type
console.log(betterEcho({ name: "Alex", age: 123 }));
// Built-in Generics
var testResults = [1.2, 2.3];
testResults.push(1);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Bananna"]);
// Generic Type
var echo2 = betterEcho;
// new constant that we assign a type (the constant will hold a generic function where input is one arg of generic type, 
// and the function will return something of that input type)
console.log(echo2("Something else"));
