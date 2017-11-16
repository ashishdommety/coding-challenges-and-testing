module.exports = (a,b) =>{ // a=2,b=3
  b = b - a; //b=1
  a = a + b; // a=3
  b = a - b; //b=2
  return[a,b]; //[3,2]
};
