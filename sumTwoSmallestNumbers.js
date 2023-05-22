function sumTwoSmallestNumbers(array){
    const num = array.sort((a,b) => a-b)
    return num[0] + num[1]
}

console.log(sumTwoSmallestNumbers([1,2,8,10]));