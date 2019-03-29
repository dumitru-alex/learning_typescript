// define a type where we want to make sure a certain field is available

interface NamedPerson {
    firstName: string;        // mandatory
    age?: number;             // optional  
    [propName: string]: any;  // unknown at runtime, get the rest in this list
    salute(): void;           // methods
}

function greetings(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
    console.log("Do you like ?: " + person.hobbies);
}

const person1: NamedPerson = {
    firstName: "Alex",
    age: 32,
    hobbies: ["1",2],
    salute() {
        console.log("hi, how are you");
    }

};

greetings(person1);
// this gives error, when passing objects directly, because they are checked in more detail, against the interface. 
// greetings({firstName: "Alex2", age: 32}); 
// we add now the age as an optional argument to the interface, and this will work
// after adding methods, this will not work (needs to be defined)

person1.salute();

// defining a class with an interface
class Person2 implements NamedPerson {
    firstName: string;
    salute() {
        console.log("Ahoj");
    };
}

const alx1 = new Person2();
alx1.firstName = "Alex";
alx1.salute();