{
//

const sumArray = (number: number[]) : number => {
    const result = number.reduce((num, num1) =>  num + num1, 0)
    return result
}

console.log(sumArray([1, 2, 3, 4, 5]));


//// Solved
//
}