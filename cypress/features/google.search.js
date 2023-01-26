const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit google.com", () => {
  cy.visit("https://www.google.ca/");
});

Then("I did a search", () => {
  cy.get('input[name="q"').should('be.visible').type('test {Enter}');

  //assert.deepEqual({}, {});
});