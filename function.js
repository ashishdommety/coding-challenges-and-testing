
module.exports = {
// titleize a string
  titleize : ((str) => {
    return str.split(" ")
              .map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
              .join(" ");
  }),
// convert a number to string
  returnString : ((num) =>{
    return num.toString();
  }),
  nonRepeated: ((str) => {

  })

}
