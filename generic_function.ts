// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Alex"));
console.log(echo(123));
console.log(echo({name: "Alex", age: 123}));

// Better Generic
function betterEcho<T>(data: T){
    return data;
}

console.log(betterEcho("Alex"));
console.log(betterEcho(123));
// console.log(betterEcho<number>(123)); to infer the type
console.log(betterEcho({name: "Alex", age: 123}));

// Built-in Generics
const testResults: Array<number> = [1.2, 2.3];
testResults.push(1);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple","Bananna"]);

// Generic Type
const echo2: <T>(data: T) => T = betterEcho;
// new constant that we assign a type (the constant will hold a generic function where input is one arg of generic type, 
// and the function will return something of that input type)

console.log(echo2<string>("Something else"));