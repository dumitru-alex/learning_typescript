/*How to run your .ts files
1. save your .ts file 
2. run the compiler to compile it to javascript (tsc)
    - alternatively use tsc -w (watch mode) to continuously and compile it automatically when saved
3. run the javascript file with node
*/

// Types in TypeScript - if not explicitly defined, they are inferred

// string
let myName = "Alex";
console.log(myName);

// number
let myAge = 32;

// boolean
let hasHobby = false;

// any
let myRealAge;  // defaults to any
myRealAge = 24;
myRealAge = "24";

// So far, the types are inferred. We can also be explicit, by using colon to say which type a variable should have

let myRealAgeExpl: number;
myRealAgeExpl = 24;
// myRealAgeExpl = "24";

// array
let hobbies = ["cooking", "programming"];
console.log(hobbies);
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100];    // gives error, because it was initialized with an array of strings

let anyHobbies: any[] = ["cooking", "programming"];   // explicitly assign array of any, and then next line will work just fine
anyHobbies = [100];
// anyHobbies = 100; // however, it still expects an array, so this will be wrong
console.log(anyHobbies);

// tuples

let address: [string, number] = ["my street", 123];
console.log(address);
// address = [123, "my other street"];  // by defining the type of each element in the tuple, we also enforce the order, so this will throw error


// enum

enum Color {
    Gray,   // 0
    Green = 100,  // 1 -> overwrites 1 with 100. !! This changes the starting point for the rest of the elements. i.e., next one gets 101
    Blue,    // 2
    Red      // 3
}

let myColor: Color = Color.Green;
console.log(myColor);   // outputs 1 - in the background, each element in enum is indexed (from 0). This can be overwritten


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

function sayHello1(): void {
    console.log("Hello");
}

console.log(sayHello(), sayHello1());


// argument types

// function multiply(value1, value2): number {
//     return value1 * value2;
// }

// console.log(multiply(2,"max")) // this has unreliable return, because "max" is casted in NaN, then the return of the operation is NaN

// to avoid it, we can explicitly set types for function parms

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2,"max")); // here we get error
console.log(multiply(2,10));


// function as a type

// let varName: () => something_to_return;   // template looks like this. () - of type function; => what to return
let myMultily: (val1: number, val2: number) => number;
myMultily = multiply;
// myMultily = sayHello;  // this will generate an error, because sayHello does not satisfy the type which was set


// Objects  (similar to dict in python)

let userData = {
    name: "Alex",
    age: 32
};

// userData = {};  // Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, age
// userData = {
//     a: "Alex",
//     b: 32
// }             // Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'

// expressively define the types of the properties
let userData1: {name: string, age: number} = {
    name: "Alex",
    age: 32
};

// more complex object

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 5.5, -1],
    output: function (all: boolean): number[] {
        if (all) {
            return this.data;
        } else {
            return this.data[0];
        }
    }
};

console.log(complex.output(true));


// Building complex types (type aliases)

type complexType = {data: number[], output: (all: boolean) => number[]};

// now we can reuse this type over and over

let complexNew: complexType = {
    data: [100, 5.5, -1],
    output: function (all: boolean): number[] {
        if (all) {
            return this.data;
        } else {
            return this.data[0];
        }
    }
};

console.log(complexNew.output(false));


// allowing multiple types with Union

let myRealAge1: number | string;  // can have type number OR string. NOT boolean, for ex.
myRealAge1 = 32;
myRealAge1 = "32";
// myRealAge1 = true; // compilation error

// checking types during runtime

let finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("YEEY!");
}


// never type (from TS 2.0)

// the idea behind here is that this function actually never returns. It throws the error, and that's that
function neverReturns() {
    throw new Error('An error!');
};

// same to
function neverReturns1(): never {
    throw new Error('An error!');
};

neverReturns();

// Nullable types (from TS 2.0)

// needs to be enabled in tsconfig.json with "strictNullChecks": true
let canBeNull = 12;
// let canBeNull: number | null = 12; Use union to overcome the error from below
// canBeNull = null;   // gives error because it cannot be null (initialized with number)
let canAlsoBeNull;  // by default has type=any, value=undefined.
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;   // vice-versa is valid as well. If it is init to null, it cannot have other type

