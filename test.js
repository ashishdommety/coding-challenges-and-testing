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

//check if number given is prime
describe("prime Check", function(){
  it("should check if number is prime or not", function(){
    allFunctions.primeCheck(137).should.equal(true);
    allFunctions.primeCheck(222).should.equal(false);
    allFunctions.primeCheck("hello").should.equal("not a number");
  })
})

//remove duplicates from a string
describe("Remove Duplicate from String", function(){
  it("should remove duplicate characters from a string leaving only one", function(){
    allFunctions.removeDuplicates("hello").should.equal("heo");
    allFunctions.removeDuplicates("sportsman").should.equal("portman");
    allFunctions.removeDuplicates("nonsense").should.equal("o");
  })
})
