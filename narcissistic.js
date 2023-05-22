
function narcissistic(value) {
    const num = value.toString().split("")    
    const n = num.reduce((acc, cur)=> +acc + cur** num.length, 0)   
    return +n === +value
}
console.log(narcissistic(153));