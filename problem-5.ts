{
  //

  type Person = { name: string; age: number };

  const person: Person = { name: "Alice", age: 30 };

  const getProperty = <T, X extends keyof T>(value1: T, value2: X): T[X] => {
    return value1[value2];
  };

  console.log(getProperty(person, "name"));


  //
}
