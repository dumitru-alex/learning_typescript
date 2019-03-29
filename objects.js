class Person {
    constructor(name, username) {
        this.username = username;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person("Alex", "alex");
console.log(person);
console.log(person.name, person.username);
person.printAge();
person.setType("nice");
// inheritance 
class Alex extends Person {
    // name = "Alex";
    constructor(username) {
        super("Alex", username);
        this.age = 31;
        // console.log(this.type); property 'type' is private to Person, so does not get inherited
    }
}
const alx = new Alex("alex");
console.log(alx);
// getters and setters
class Plant {
    constructor() {
        this._species = "Default";
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = "Default";
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);
// Static properties and Methods
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
// static keyword helps to expose properties and methods without instantiating a class
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
