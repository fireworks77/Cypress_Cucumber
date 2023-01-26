const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit {string}", (domain) => {
  cy.visit(`https://www.${domain}/`);
});

Then("I search keywords {string}", (keyword) => {
  cy.get('input[name="q"').should('be.visible').type(`${keyword} {Enter}`);

  //assert.deepEqual({}, {});
});