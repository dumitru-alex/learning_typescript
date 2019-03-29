var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
    function calcRectangle(w, l) {
        return w * l;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
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
var CircleMath = MyMath.calcCircumference;
var PI = 2.99;
console.log(CircleMath(3));
console.log(MyMath.calcRectangle(2, 2));
