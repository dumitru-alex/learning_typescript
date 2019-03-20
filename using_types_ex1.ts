// 1st version

// let bankAccount: {money: number, deposit: (val: number) => void} = {
//     money: 2000,
//     deposit(value: number) {
//         this.money += value;
//     }
// };
 
// let myself: {name: string,
//             bankAccount: {money: number, deposit: (val: number) => void},
//             hobbies: string[]
//             } = {
//     name: "Alex",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };

// 2nd version (using type alias)

type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};
 
let myself: {name: string,
            bankAccount: BankAccount,
            hobbies: string[]
            } = {
    name: "Alex",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

 
myself.bankAccount.deposit(3000);
 
console.log(myself);