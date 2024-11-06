{
//  
//////////////////////////////////// PROBLEM TRY LATER

const countWordOccurrences = (sentence: string, word: string) => {
    const convertToLowerCase = sentence.toLowerCase().split(' ')
    return convertToLowerCase.filter(value => value === word.toLowerCase()).length; 
    
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript "));





//
}