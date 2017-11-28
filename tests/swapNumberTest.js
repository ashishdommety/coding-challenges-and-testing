const allFunctions = require("../functions/index.js");

describe("swap numbers without using temp", function(){
  it("should swap two numbers without using the temp variable", function(){
    allFunctions.swapNumber(2,3).should.be.an('array').that.includes(2);
    allFunctions.swapNumber(2,3).should.be.an('array').that.includes(3);
    allFunctions.swapNumber(2,3)[0].should.equal(3);
    allFunctions.swapNumber(2,3)[1].should.equal(2);
  });
});
