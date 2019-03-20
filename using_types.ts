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