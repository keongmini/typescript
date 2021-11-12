// const name = "kkmin",
//     age = 25,
//     gender = "female"


// interface don't work in js
interface Human {
    name : string,
    age : number,
    gender : string
}

const person = {
    name : 'kmin',
    age : 22,
    gender : 'female'
}

// const sayHi = (name:string, age:number, gender:string):string => {      
//     // gender? : gender parameter is optional
//     // void : return anything
//     return `hello ${name}. you are ${age}, you are ${gender}`
// }

const sayHi = (person:Human):string => {
    return `hello ${person.name}. you are ${person.age}, you are ${person.gender}`
}

console.log(sayHi(person))

export {};