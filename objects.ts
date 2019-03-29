class Person {
    name: string;
    private type: string;  // private is only accessible from the object you create based on this class 
    protected age: number; // private + accessible from any class that inherits from this class

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
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

    constructor(username: string) {
        super("Alex", username);
        this.age = 31
        // console.log(this.type); property 'type' is private to Person, so does not get inherited
    }
}

const alx = new Alex("alex");

console.log(alx);



// getters and setters


class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
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
    // static keyword helps to expose properties and methods without instantiating a class
    static PI: number = 3.14; 
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));


// abstract classes - cannot be instantiated directly (you have to always inherit from them)

abstract class Project {
    projectName: string = "Default";
    budget: number;

    // there can also be abstract methods
    // - we give just the method abstract (how the function suppose to look like), but no implementation 
    // - we have to implement this class in our child class
    abstract changeName(name: string): void;

    // normal method
    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject;

console.log(newProject);


// Private constructors and singletons

class OnlyOne {
    private static instance: OnlyOne;
    
    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();

// readonly properties

console.log(right.name); // it's possible (it is set as public)
right.name = "something else"; // this also is possible 

// what if we don't want to change it from outside (keep it readable but only modifiable from the constructor)
// - one way - use getter (if we don't specify a setter, but only a getter, then the property becomes readonly)
// - there is a shorter route, by specifying readonly with property definition
// - see line 120 and error on line 136