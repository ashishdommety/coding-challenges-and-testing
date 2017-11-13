const allFunctions = require("../functions/index.js");

//find first non-repeated character
describe("non-repeated character", function(){
  it("should find first non-repeated character", function(){
    allFunctions.nonRepeated("sportsbatsman").should.equal('p');
    allFunctions.nonRepeated("ababab").should.equal('no non-repeats');
  });
});
