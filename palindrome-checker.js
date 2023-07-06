function palindrome(str) {

    // makes a copy of the string and makes every letter lowercase
    const str_copy = str.toLowerCase()
  
    // creates regex to capture alphanumeric characers only
    let regex = /[a-z0-9]/g
  
    // creates a array of chars that matches the regex
    const char_array = str_copy.match(regex)
  
    console.log(char_array)
  
    
    
    // function that checks if an character array is a pallindrome
    function pallindromeChecker(arr){
      
      const copy_arr = arr.slice(0,) // makes a copy of the array param
      
      let pallindromeStatus = true  // status if char array is pallindrome , initially "true"
  
      const reverse_copy_arr = [] // empty array 
  
      
      // for loop to populate epty array 
      for(let i = 0;i<copy_arr.length;i++){
  
          // populates empty array in the reverse order of original array
          reverse_copy_arr.push(copy_arr[copy_arr.length-1-i])
  
      }
  
      // for loop that checks if inded of original array equals reverse array 
      for (let i=0;i<copy_arr.length;i++){
  
        // if element does not equal in any index , set status fault and exit right away
        if(copy_arr[i]!=reverse_copy_arr[i]){
          pallindromeStatus = false
          break;
        }
  
        else{
          // do nothing
        }
  
      }
  
  
    return pallindromeStatus
  
    }
  
  console.log(pallindromeChecker(char_array))
  
  return pallindromeChecker(char_array) // call pallindromeChecker function and return its return 
  }
  
  palindrome("My age is 0, 0 si ega ym.");