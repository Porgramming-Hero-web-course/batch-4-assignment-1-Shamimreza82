{
//  
//////////////////////////////////// PROBLEM TRY LATER

const countWordOccurrences = (sentence: string, word: string) => {
    const convertToLowerCase = sentence.toLowerCase().split(' ').filter(value => value === word.toLowerCase()).length
    return convertToLowerCase
    
}




// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")


console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript "));





//
}