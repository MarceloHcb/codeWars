function getSum(a, b)
{
const [smaller, bigger] = [Math.min(a, b), Math.max(a, b)];    
    return (bigger - smaller + 1)* (bigger + smaller) / 2 ;
}

console.log(getSum(2,8));