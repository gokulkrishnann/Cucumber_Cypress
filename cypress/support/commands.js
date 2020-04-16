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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add("set_Value",(field, value) =>{
    //console.log("field is:" + field);
    cy.get(field).type(value)
});

Cypress.Commands.add("select_Value",(field, value)=> {
    cy.get(field).select(value)
});

Cypress.Commands.add("clickField",(field)=> {
    cy.get(field, { timeout: 7000 }).should('have.length', 1).click()
});

Cypress.Commands.add("assertText",(field, value) =>{
    cy.get(field).should('have.text', value)
});

Cypress.Commands.add("printText",(field)=>{
    cy.get(field).should(($div) => {
        const text = $div.val();
        cy.log("text is:" + text);
    });
});