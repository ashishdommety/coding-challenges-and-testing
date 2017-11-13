const allFunctions = require("../functions/index.js");

//remove duplicates from a string
describe("Remove Duplicate from String", function(){
  it("should remove duplicate characters from a string leaving only one", function(){
    allFunctions.removeDuplicates("hello").should.equal("heo");
    allFunctions.removeDuplicates("sportsman").should.equal("portman");
    allFunctions.removeDuplicates("nonsense").should.equal("o");
  });
});
