"use strict";
// const name = "kkmin",
//     age = 25,
//     gender = "female"
Object.defineProperty(exports, "__esModule", { value: true });
// interface don't work in js
// interface Human {
//     name : string,
//     age : number,
//     gender : string
// }
// use class instead of interface for js
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
// const person = {
//     name : 'kmin',
//     age : 22,
//     gender : 'female'
// }
const lynn = new Human('Lynn', 22, 'female');
// const sayHi = (name:string, age:number, gender:string):string => {      
//     // gender? : gender parameter is optional
//     // void : return anything
//     return `hello ${name}. you are ${age}, you are ${gender}`
// }
const sayHi = (person) => {
    return `hello ${person.name}. you are ${person.age}, you are ${person.gender}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map