const allFunctions = require("../functions/index.js");

//capitalize title
  describe("capitalize title", function(){
    it("should change first letters to uppercase", function(){
      allFunctions.titleize("mr jones").should.equal("Mr Jones");
    });
  });
