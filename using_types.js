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
