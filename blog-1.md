The significance of union and intersection types in Typescript.


Union Types: 
A union type lets a variable hold one of several types. Imagine you have a variable that can be either a string or a number. With union types, you can tell TypeScript this variable can be either, and it will check which type you're using when you use it.


type SrtOrNumber = string | number; 

const strOrNumber = (value: SrtOrNumber ) => {
    if (typeof value === "string"){
        console.log(`I am String Value: ${value}`)
    } else {
        console.log(`I am Number Value: ${value}`);
    }
}


Intersection Types: 


