describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('a[href="/login"]').click()
    })
    it('Fill the Login to your account field', () => {
        cy.get('input[placeholder="Email Address"]').eq(0).type('automation.cypress@yopmail.com')
        cy.get('input[data-qa="login-password"]').type('cypressCode1')
    })
    it('Fill the User Signup! field', () => {
        cy.get('input[data-qa="signup-name"]').type('Automation Guru')
        cy.get('input[placeholder="Email Address"]').eq(1).type('automation.cypress@yopmail.com')
    })
    it('Click on Product and Search a profuct', () => {
        cy.get('a[href="/products"]').click()
        cy.get('input[placeholder="Search Product"]').click().type('Men Tshirt')
        cy.get('.fa.fa-search').click() 
    })
})
