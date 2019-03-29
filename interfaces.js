// define a type where we want to make sure a certain field is available
function greetings(person) {
    console.log("Hello, " + person.firstName);
    console.log("Do you like ?: " + person.hobbies);
}
var person1 = {
    firstName: "Alex",
    age: 32,
    hobbies: ["1", 2],
    salute: function () {
        console.log("hi, how are you");
    }
};
greetings(person1);
// this gives error, when passing objects directly, because they are checked in more detail, against the interface. 
// greetings({firstName: "Alex2", age: 32}); 
// we add now the age as an optional argument to the interface, and this will work
// after adding methods, this will not work (needs to be defined)
person1.salute();
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.salute = function () {
        console.log("Ahoj");
    };
    ;
    return Person2;
}());
var alx1 = new Person2();
alx1.firstName = "Alex";
alx1.salute();
