function fibonacci(n) {



    if(n == 1 || n == 2)return 1
    if(n == 0)return 0
    if(n < 0)return "OOPS"
    if(typeof n === "string"){
        parseInt(n)
    }

    let nFibonacci = []
    let number ;

    for(let i = 0 ; i <= n; i++){
      
      if(i === 0){
        number = 0
        nFibonacci.push(number)
        continue 
      }
      if(i === 1){
        number = 1
        nFibonacci.push(number)
        continue 
      }
      
      number = nFibonacci[i-1] + nFibonacci[i-2]
      nFibonacci.push(number)
    }
    
    
    return nFibonacci[nFibonacci.length-1]
    
  }

// Do not edit below this line
module.exports = fibonacci;
