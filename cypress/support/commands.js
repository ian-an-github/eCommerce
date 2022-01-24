// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-localstorage-commands'
import '@percy/cypress'

Cypress.Commands.add('setsession', () => {
    cy.session("login", () => {
        cy.setCookie("_vercel_jwt","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzkwNDA0ODMsImF1ZCI6ImRldi16ZWFsLnZlcmNlbC5hcHAiLCJoYXNoIjoiMzkwM2I5NzUyODM3ZDY0ZDRkM2YzNWFkYzM5NmNmYjE3OTcwYTlhZmM3YjA5MWVhM2Y5OTc3Zjc0N2EzMzk1NSIsInN1YiI6InBhc3N3b3JkLXByb3RlY3Rpb24ifQ.a6ebCGj7_WFeSB3zfpjuEt1eyo4eFFRsp57XhbdlB6s")
        })
})
