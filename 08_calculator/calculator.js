const add = function(a,b) {
	
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
	
  if(!array.length)return 0

  let sum = 0;

  for(let i = 0; i < array.length; i++ ){
    sum += array[i]
  }
  return sum
};

const multiply = function(array) {

 let multiply = array[0];

  for(let i = 1; i < array.length ; i++){
    
    multiply *= array[i]
    
  }
  return multiply

};

const power = function(a,b) {

let power = a;

for(let i = 1; i < b ; i++){

  power = a * power

}
return power
	
};

const factorial = function(num) {

	let factorial = num

  if(num === 0 || num === 1){
    factorial = 1
    return factorial
  }

  for(let i = num-1; i != 0 ; i--){

    factorial *= i
  }
return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
