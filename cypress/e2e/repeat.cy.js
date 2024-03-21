let email = 'tobi@tobi.com'
let fn = 'Abido shaker'

describe('',()=>{
    it('I wanna test commands',()=>{
        cy.visit('https://www.automationexercise.com/')
        cy.signUp(email,fn)
        cy.GenerateEmail()
    })
})