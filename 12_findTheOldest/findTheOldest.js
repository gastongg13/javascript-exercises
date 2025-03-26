function findTheOldest(array) {
 
  
    let arrayYears = array.map((e) =>  {

        if(!e.yearOfDeath){
            let date = new Date()
            return date.getFullYear() - e.yearOfBirth 
        }else{
            return e.yearOfDeath - e.yearOfBirth 
        }
        
    })

    let indexOfOldest = arrayYears.map((e,index)=> {
      let indexN;
      
      if(arrayYears[index] > arrayYears[index+1]){
        indexN = index
      }else {
        indexN = null
      }
      
      return indexN
    })
    
    let filteredIndex = indexOfOldest.filter((e)=> (typeof e  === "number"))
    
    
    return array[filteredIndex[0]]
    
    
   
  }
  

// Do not edit below this line
module.exports = findTheOldest;
