function getSum(a, b){
    const smaller = a < b ? a : b;
    const bigger = a > b ? a : b; 
    let numbers = 0;
    for (let i = smaller + 1; i < bigger; i++) {
    numbers += i;
    }
return numbers
}
console.log(getSum(1,5));