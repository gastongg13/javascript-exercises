const sumAll = function(a,b) {

    if(a < 0  || b < 0  || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    let sum = 0;
    
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    for (let i = min ; i <= max ; i++){

        sum =  i + sum

    }

 return sum
};

// Do not edit below this line
module.exports = sumAll;
