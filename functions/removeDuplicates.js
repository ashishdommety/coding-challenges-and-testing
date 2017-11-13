module.exports = function(str){
  //remove duplicate characters from a string
    var word = str;
    var wordArr = [];
    //loop through each character in the string.
    for(var i = 0; i < str.length; i++){
      var character = str.charAt(i);
      //if duplicate doesn't exist, push it to the array
      if(str.indexOf(character)===i && str.indexOf(character, i+1)==-1){
        wordArr.push(character);
      }
    }
    // return wordArr;
    return wordArr.join("");
};
