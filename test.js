"use strict";
//requiring chai
var should = require("chai").should();

const allFunctions = require("./function.js");

//the actual test that checks for a return
describe("capitalize title", function(){
  it("should change first letters to uppercase", function(){
    allFunctions.titleize("mr jones").should.equal("Mr Jones");
  });
});

describe("return string", function(){
  it("should return a number", function(){
    allFunctions.returnString(3).should.equal("3");
  })
})
