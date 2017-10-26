"use strict";
//requiring chai
var should = require("chai").should();

const allFunctions = require("./function.js");

//capitalize title
describe("capitalize title", function(){
  it("should change first letters to uppercase", function(){
    allFunctions.titleize("mr jones").should.equal("Mr Jones");
  });
});

//return string
describe("return string", function(){
  it("should return a number", function(){
    allFunctions.returnString(3).should.equal("3");
  })
})

//find first non-repeated character
describe("non-repeated character", function(){
  it("should find first non-repeated character", function(){
    allFunctions.nonRepeated("sportsbatsman").should.equal('p');
    allFunctions.nonRepeated("ababab").should.equal('no non-repeats');
  })
})
