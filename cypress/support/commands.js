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
import Chance from "chance";
const generateRandom = new Chance();

const user_name = 'Automation Guru'
const password = 'CypressWonderland'
const first_name = 'Automation'
const last_name = 'Guru'
const company = 'Ribadu Shaker'
const address = '1 Ribadu Shaker Avenue, Off Indaboski Quaters'
const state = 'Kilobade'
const city = 'Show working'
const zipcode = '234501'
const mobile_number = '1234567'

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('signUp',(email) => {

        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="signup-name"]').type(user_name)
        cy.get('input[placeholder="Email Address"]').eq(1).type(email)
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('#id_gender1').check()
        cy.get('input[data-qa="password"]').type(password)
        cy.get('select[data-qa="days"]').select([15])
        cy.get('select[data-qa="months"]').select([2])
        cy.get('select[data-qa="years"]').select('1996')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('input[data-qa="first_name"]').type(first_name)
        cy.wait(4000)
        cy.get('input[data-qa="last_name"]').type(last_name)
        cy.get('input[data-qa="company"]').type(company)
        cy.get('input[data-qa="address"]').type(address)
        cy.get('#country').select([2])
        cy.get('#state').type(state)
        cy.get('#city').type(city)
        cy.get('#zipcode').type(zipcode)
        cy.get('#mobile_number').type(mobile_number)
        cy.get('button[data-qa="create-account"]').should('be.visible').and('have.text', 'Create Account')
        cy.get('button[data-qa="create-account"]').click()
        cy.contains('Account Created!').should('be.visible').and('have.text','Account Created!')
})

Cypress.Commands.add('GenerateEmail',()=>{
    let name = generateRandom.name()
    return name;
})

Cypress.Commands.add('Login', (email, password) =>{

    cy.get('input[placeholder="Email Address"]').eq(0).type(email)
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('button[data-qa="login-button"]').click()


})
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