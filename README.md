# Cypress_Cucumber
Cypress Cucumber Demo

## Install
- run command `npm install`
Cypress and `@badeball/cypress-cucumber-preprocessor` will be installed

## Run it locally
### Launch local cypress runner
- run command `npx cypress open`
Lanuch the Cypress runner locally
### Run smoke tests only
- run command `npx cypress run --env TAGS=@smoke`
### Run e2e tests
- run command `npx cypress run --env TAGS=@e2e`