const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit {string}", (domain) => {
  cy.visit(`https://www.${domain}/`);
});

When("I search keywords {string}", (keyword) => {
  cy.get('input[name="q"').should('be.visible').type(`${keyword} {Enter}`);
});

Then("keywords {string} presents in result", (keyword) => {
  cy.get('input[name="q"').should('have.value', keyword);
});