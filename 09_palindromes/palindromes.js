const palindromes = function (word) {

  let palindrome = word.toLowerCase().split('').filter((e)=> /[a-z0-9]/.test(e)).join('')
  
  
  let reverse = palindrome.split('').reverse().join('')
  
  if(palindrome === reverse){
    return true
  } else {
    return false
  }
  
  // return palindrome === reverse

};

// Do not edit below this line
module.exports = palindromes;
