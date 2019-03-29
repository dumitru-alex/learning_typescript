// moved to separate file

// namespace MyMath {
//     const PI = 3.14;

//     export function calcCircumference(diameter: number) {
//         return diameter * PI;
//     }

//     export function calcRectangle(w: number, l: number) {
//         return w * l;
//     }
// }

// how to import a namespace (you have to reference it with html like syntax)
/// <reference path="namespaces_declaration.ts" />
// to be able to work, don't forget to add --outFile xxx to your tsc command

// create an alias from a referenced namespace

import CircleMath = MyMath.calcCircumference;
const PI = 2.99;

console.log(CircleMath(3));
console.log(MyMath.calcRectangle(2,2));