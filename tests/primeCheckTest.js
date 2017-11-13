const allFunctions = require("../functions/index.js");

//check if number given is prime
describe("prime Check", function(){
  it("should check if number is prime or not", function(){
    allFunctions.primeCheck(137).should.equal(true);
    allFunctions.primeCheck(222).should.equal(false);
    allFunctions.primeCheck("hello").should.equal("not a number");
  });
});
