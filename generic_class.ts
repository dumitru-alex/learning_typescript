// normal class
class SimpleMath {
    baseValue;
    multiplyValue;
    calculate() {
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

// Generic class
class SimpleMath2<T> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
        // cast the values to numbers by adding a plus sign (if not, there is compilation error)
    }
}

const simpleMath2 = new SimpleMath2();
simpleMath2.baseValue = 10;
simpleMath2.multiplyValue = 20;
console.log(simpleMath2.calculate());

// extending generic types. it's like a constraint, so that it becomes less generic 
class SimpleMath3<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
        // cast the values to numbers by adding a plus sign (if not, there is compilation error)
    }
}

const simpleMath3 = new SimpleMath3<string>();
simpleMath3.baseValue = "10";
simpleMath3.multiplyValue = "20";
console.log(simpleMath3.calculate());


class SimpleMath4<T extends number | string, U extends number | string> {
// class SimpleMath4<T extends number | string, U extends number | string> {   // like this, type T can have num or str
// class SimpleMath4<T extends U, U extends number | string> {                 // like this, type T has to be the same as U, and U can have num or str
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath4 = new SimpleMath4<string, number>();
simpleMath4.baseValue = "10";
simpleMath4.multiplyValue = 20;
console.log(simpleMath4.calculate());