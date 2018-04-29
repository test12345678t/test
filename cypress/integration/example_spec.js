const { join } = require("path");

describe("App tests", function() {
  it("visits the page", function() {
    console.log("dirname: ", __dirname);
    cy.visit("http://localhost:8000");

    cy.get('h1').contains("Hello World!");

    cy.screenshot("Homepage");
  });
});
