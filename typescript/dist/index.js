"use strict";
// const name = "kkmin",
//     age = 25,
//     gender = "female"
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: 'kmin',
    age: 22,
    gender: 'female'
};
// const sayHi = (name:string, age:number, gender:string):string => {      
//     // gender? : gender parameter is optional
//     // void : return anything
//     return `hello ${name}. you are ${age}, you are ${gender}`
// }
const sayHi = (person) => {
    return `hello ${person.name}. you are ${person.age}, you are ${person.gender}`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map