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
<img width="1165" alt="cypress cucumber tag smoke" src="https://user-images.githubusercontent.com/48189320/214960728-24e7e336-4947-4f0f-838f-4cbc8df8cf14.png">

### Run e2e tests
- run command `npx cypress run --env TAGS=@e2e`<img width="1155" alt="cypress cucumber tag e2e" src="https://user-images.githubusercontent.com/48189320/214960746-d753b25b-119b-48a0-ac3c-aee800884129.png">

## Reference
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)