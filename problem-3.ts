{
//  

const countWordOccurrences = (sentence: string, word: string) => {
    const convertToLowerCase = sentence.toLowerCase().split(' ')
    return convertToLowerCase.filter(value => value === word.toLowerCase()).length; 
    
}

console.log(countWordOccurrences("I love typescript", "typescript"))





//
}