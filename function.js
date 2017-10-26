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
    if(typeof(num) !== 'number'){
      return "not a number";
    }

    let divisor = 2;
    while (num > divisor) {
      let remainder = num % divisor;
      if (num % divisor === 0) {
        return false;
      } else {
        divisor++;
      }
    }
    return true;
  }
}