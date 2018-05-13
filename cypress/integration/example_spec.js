const { join } = require("path");

describe("App tests", function() {
  it("visits the page", function() {
    console.log("dirname: ", __dirname);
    cy.visit("http://localhost:8000");

    cy.get("h1").contains("Hello World!").then(screenshot('Homepage'));
  });
});
// test

var screenshot = file => () => {
  var reporter = window.parent.document.getElementsByClassName("reporter-wrap")[0],
    display = reporter.style.display;
  reporter.style.display = "none";
  return cy
    .wait(1)
    .screenshot(file)
    .then(() => {
      reporter.style.display = display;
    });
};
