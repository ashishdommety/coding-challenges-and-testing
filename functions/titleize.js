module.exports =
  // titleize a string
  function(str) {
    return str.split(" ")
      .map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
      .join(" ");
  }
