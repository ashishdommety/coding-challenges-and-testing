module.exports = {
  // titleize a string
  titleize: (str) => {
    return str.split(" ")
      .map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
      .join(" ");
  },

  // convert a number to string
  returnString: (num) => {
    return num.toString();
  },

  //finds non-repeated character
  nonRepeated: (str) => {
    for (let i = 0; i < str.length; i++) {
      let currentCharacter = str.charAt(i);
      if (str.indexOf(currentCharacter) == i && str.indexOf(currentCharacter, i + 1) == -1) {
        return currentCharacter;
      }
    }
    return 'no non-repeats';
  },

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
  },

  //remove duplicate characters from a string
  removeDuplicates: (str) => {
    let word = str;
    let wordArr = [];
    //loop through each character in the string.
    for(let i = 0; i < str.length; i++){
      let character = str.charAt(i);
      //if duplicate doesn't exist, push it to the array
      if(str.indexOf(character)===i && str.indexOf(character, i+1)===-1){
        wordArr.push(character);
      }
    }
    return wordArr.join("");
  }
}
