// normal class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
// Generic class
var SimpleMath2 = /** @class */ (function () {
    function SimpleMath2() {
    }
    SimpleMath2.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
        // cast the values to numbers by adding a plus sign (if not, there is compilation error)
    };
    return SimpleMath2;
}());
var simpleMath2 = new SimpleMath2();
simpleMath2.baseValue = 10;
simpleMath2.multiplyValue = 20;
console.log(simpleMath2.calculate());
// extending generic types. it's like a constraint, so that it becomes less generic 
var SimpleMath3 = /** @class */ (function () {
    function SimpleMath3() {
    }
    SimpleMath3.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
        // cast the values to numbers by adding a plus sign (if not, there is compilation error)
    };
    return SimpleMath3;
}());
var simpleMath3 = new SimpleMath3();
simpleMath3.baseValue = "10";
simpleMath3.multiplyValue = "20";
console.log(simpleMath3.calculate());
var SimpleMath4 = /** @class */ (function () {
    function SimpleMath4() {
    }
    SimpleMath4.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath4;
}());
var simpleMath4 = new SimpleMath4();
simpleMath4.baseValue = "10";
simpleMath4.multiplyValue = 20;
console.log(simpleMath4.calculate());
