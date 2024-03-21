const user_name = 'Automation Guru'
const email = 'automation^.cypress@yopmail.com'
const password = 'CypressWonderland'
const first_name = 'Automation'
const last_name = 'Guru'
const company = 'Ribadu Shaker'
const address = '1 Ribadu Shaker Avenue, Off Indaboski Quaters'
const state = 'Kilobade'
const city = 'Show working'
const zipcode = '234501'
const mobile_number = '1234567'




describe('Automation_Exercise', () => {
    it('Sign up', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.wait (3000)
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


})

// input username
//input email address
//click on signup button
//Assert you are on signup page 'Create Account is Unqiue'
// Assert account created txt/message : 
// Congratulations! Your new account has been successfully created! You can now take advantage of member privileges to enhance your online shopping experience with us.


