module.exports = curry(function(a,b,c,d){
  return a + b + c + d;
});

//Function that will make curry work:
function curry(fnc) { //take function as argument
  var arity = fnc.length; // arity = number of arugments fnc has

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0); // convert arugments of f1 into an array of arguments
    if (args.length >= arity) { // if the length of args.length >= arity
      return fnc.apply(null, args); // return a new function with arugments passed
    }
    else { // if args.length < arity
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0); // ?
        return f1.apply(null, args.concat(args2)); // ?
      };
    }
  };
}
