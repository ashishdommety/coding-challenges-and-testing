module.exports = function(){
  //check Prime Number
  primeCheck: (num) => {
    // check if num is actually a number
    if(typeof(num) !== 'number'){
      return "not a number";
    }
    let divisor = 2; // create starting divisor
    while (num > divisor) { // loop through num as long as it's greater than divisor
      if (num % divisor === 0) {
        return false; // if num is divisible by divisor
      } else {
        divisor++; // if not, increase the divisor
      }
    }
    return true; // as soon as divisor is greater than number, we know it's a prime
  }
}
