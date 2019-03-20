/*How to run your .ts files
1. save your .ts file
2. run the compiler to compile it to javascript (tsc)
    - alternatively use tsc -w (watch mode) to continuously and compile it automatically when saved
3. run the javascript file with node
*/
// Types in TypeScript - if not explicitly defined, they are inferred
// string
var myName = "Alex";
console.log(myName);
// number
var myAge = 32;
// boolean
var hasHobby = false;
// any
var myRealAge; // defaults to any
myRealAge = 24;
myRealAge = "24";
// So far, the types are inferred. We can also be explicit, by using colon to say which type a variable should have
var myRealAgeExpl;
myRealAgeExpl = 24;
// myRealAgeExpl = "24";
// array
var hobbies = ["cooking", "programming"];
console.log(hobbies);
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100];    // gives error, because it was initialized with an array of strings
var anyHobbies = ["cooking", "programming"]; // explicitly assign array of any, and then next line will work just fine
anyHobbies = [100];
// anyHobbies = 100; // however, it still expects an array, so this will be wrong
console.log(anyHobbies);
// tuples
var address = ["my street", 123];
console.log(address);
// address = [123, "my other street"];  // by defining the type of each element in the tuple, we also enforce the order, so this will throw error
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Red"] = 102] = "Red"; // 3
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // outputs 1 - in the background, each element in enum is indexed (from 0). This can be overwritten
// FUNCTIONS
function returnMyName() {
    return myName;
}
console.log("my name is: ", returnMyName());
// function returnMyName(): string {    // gives error, because we cannot return a number
//     return myAge;
// }
// returning void
function sayHello() {
    console.log("Hello");
}
// this is equivalent to:
function sayHello1() {
    console.log("Hello");
}
console.log(sayHello(), sayHello1());
// argument types
// function multiply(value1, value2): number {
//     return value1 * value2;
// }
// console.log(multiply(2,"max")) // this has unreliable return, because "max" is casted in NaN, then the return of the operation is NaN
// to avoid it, we can explicitly set types for function parms
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2,"max")); // here we get error
console.log(multiply(2, 10));
// function as a type
// let varName: () => something_to_return;   // template looks like this. () - of type function; => what to return
var myMultily;
myMultily = multiply;
// myMultily = sayHello;  // this will generate an error, because sayHello does not satisfy the type which was set
// Objects  (similar to dict in python)
var userData = {
    name: "Alex",
    age: 32
};
// userData = {};  // Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, age
// userData = {
//     a: "Alex",
//     b: 32
// }             // Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'
// expressively define the types of the properties
var userData1 = {
    name: "Alex",
    age: 32
};
// more complex object
var complex = {
    data: [100, 5.5, -1],
    output: function (all) {
        if (all) {
            return this.data;
        }
        else {
            return this.data[0];
        }
    }
};
console.log(complex.output(true));
// now we can reuse this type over and over
var complexNew = {
    data: [100, 5.5, -1],
    output: function (all) {
        if (all) {
            return this.data;
        }
        else {
            return this.data[0];
        }
    }
};
console.log(complexNew.output(false));
// allowing multiple types with Union
var myRealAge1; // can have type number OR string. NOT boolean, for ex.
myRealAge1 = 32;
myRealAge1 = "32";
// myRealAge1 = true; // compilation error
// checking types during runtime
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("YEEY!");
}
// never type (from TS 2.0)
// the idea behind here is that this function actually never returns. It throws the error, and that's that
function neverReturns() {
    throw new Error('An error!');
}
;
// same to
function neverReturns1() {
    throw new Error('An error!');
}
;
neverReturns();
// Nullable types (from TS 2.0)
// needs to be enabled in tsconfig.json with "strictNullChecks": true
var canBeNull = 12;
// let canBeNull: number | null = 12; Use union to overcome the error from below
// canBeNull = null;   // gives error because it cannot be null (initialized with number)
var canAlsoBeNull; // by default has type=any, value=undefined.
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 12;   // vice-versa is valid as well. If it is init to null, it cannot have other type
