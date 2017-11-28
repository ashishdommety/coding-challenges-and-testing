const allFunctions = require("../functions/index.js");

describe("Check if target sum exists in the array", function() {
  it("should check if the elements in an array can sum up to the target", function() {
    allFunctions.targetSumExists([10, 20], 30).should.equal(true);
    allFunctions.targetSumExists([10,20], 25).should.equal(false);
    // allFunctions.targetSumExists([10,20], 35).should.equal(false);// add this test
    allFunctions.targetSumExists([10,20],40).should.equal(true);//then add this test
  });
});
