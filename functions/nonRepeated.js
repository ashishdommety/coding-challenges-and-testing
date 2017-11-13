module.exports = function(str){
  //finds non-repeated character
    for (let i = 0; i < str.length; i++) {
      let currentCharacter = str.charAt(i);
      if (str.indexOf(currentCharacter) == i && str.indexOf(currentCharacter, i + 1) == -1) {
        return currentCharacter;
      }
    }
    return 'no non-repeats';
};
