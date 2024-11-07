{
//

type Person = {
    name: string; 
    age: number; 
    email: string; 
}

const person : Person = {
    name: "Shamim", 
    age: 30, 
    email: "shamimerezaone@gmail.com"
}


function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    const result = keys.reduce((value, key) => value && key in obj, true);
    return result;
}
    


console.log(validateKeys(person, ["name", "age"])); // Output: true
console.log(validateKeys(person, ["name", "gander"])); // Output: false





//


}