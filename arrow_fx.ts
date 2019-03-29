// standard fx
const addNumbers = function(n1: number, n2: number): number {
    return n1 + n2
}

console.log(addNumbers(1, 2))
// arrow fx  (feature from ES6)
/* 
- for this, we don't have the function keyword. 
- we start with the list of parameters (if you have one param, you don't need the parentheses - but if you want to declare the type, you actually need them :P ) 
*/

const multilyNumbers = (n1: number, n2: number) => n1 * n2; // short sintax for {return n1 * n2}

console.log(multilyNumbers(2,2))

// variations for arrow fx

const greet = () => {
    console.log("Hello!");
}
greet();

const greetFriend = friendName => console.log("Hello", friendName);

greetFriend("Martin");