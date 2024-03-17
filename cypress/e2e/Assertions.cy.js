const user_name = 'Automation Guru'
const email = 'automation.cypress@yopmail.com'


describe('Assertions', () => {
    it('passes', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('a[href="/products"]').click()
        cy.location('pathname').should('eq','/products')
        cy.contains('All Products').should('be.visible').and('have.text', 'All Products')
        cy.get('a[href="/login"]').click()
        cy.get('input[placeholder="Password"]').should('have.attr','required')
    })

    it ('Sign up', ()  => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="signup-name"]').type(user_name)
        cy.get('input[placeholder="Email Address"]').eq(1).type(email)
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('#name').should('have.attr', 'value', user_name) // verify that username from the signup page is same as the enter information page and contains the text name
        cy.get('#email').should('have.attr', 'value', email) // verify that username from the signup page is same as the enter information page



    })
  })