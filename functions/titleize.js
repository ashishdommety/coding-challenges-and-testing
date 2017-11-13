module.exports = function(){
  // titleize a string
  titleize: (str) => {
    return str.split(" ")
      .map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
      .join(" ");
  }
}
