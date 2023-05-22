function duplicateEncode(word){
    const arr = []
    const dob= []       
    word.toUpperCase().split('').forEach((l) => {        
        arr.includes(l) ? dob.push(l) : arr.push(l)
    })
    const result = word.toUpperCase().split('').map((l)=> {        
        return dob.includes(l) ? ')' : '('
    })
    return result.join('')
}
console.log(duplicateEncode('Success'))
