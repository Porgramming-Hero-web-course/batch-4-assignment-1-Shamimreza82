## The significance of union and intersection types in Typescript.

# Union Types:
A union type lets a variable hold one of several types. Imagine you have a variable that can be either a string or a number. With union types, you can tell TypeScript this variable can be either, and it will check which type you're using when you use it.

```tsx
type SrtOrNumber = string | number;

const strOrNumber = (value: SrtOrNumber) => {
  if (typeof value === "string") {
    console.log(`I am String Value: ${value}`);
  } else {
    console.log(`I am Number Value: ${value}`);
  }
};

console.log(strOrNumber(45.22)); //  I am Number Value: 45.22
console.log(strOrNumber("REZA1254")); // I am String Value: REZA1254
```




## Intersection Types:

An intersection type combines two or more types into one. This means a variable must include all the properties of each type. For example, if you have a Student type and an Student2 type, an intersection type can combine them so you get a "Student" who is also an "Student2."

```ts
 type Student = {
    id: number;
    name: string;
}

type Student2 = {
    age: number;
    email: string
}

type NewStudent = Student & Student2    /// Student and Student2 they make a  New Types thats both

const student: NewStudent = {
    id: 12345,
    name: "Shamim Reza",
    age: 30,
    email: "shamimreza@gmail.com"
}
```
