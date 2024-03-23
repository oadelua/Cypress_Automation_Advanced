let testData;

describe('Automation_Exercise', () => {
    beforeEach(() => {
        cy.fixture('Test_data').then((data) => {

            testData = data;
        })

    })
    it('Sign up', () => {

        cy.visit('https://www.automationexercise.com/')
        cy.wait(3000)
        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="signup-name"]').type(testData.user_name)
        cy.get('input[placeholder="Email Address"]').eq(1).type(testData.email)
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('#id_gender1').check()
        cy.get('input[data-qa="password"]').type(testData.password)
        cy.get('select[data-qa="days"]').select([15])
        cy.get('select[data-qa="months"]').select([2])
        cy.get('select[data-qa="years"]').select('1996')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('input[data-qa="first_name"]').type(testData.first_name)
        cy.get('input[data-qa="last_name"]').type(testData.last_name)
        cy.get('input[data-qa="company"]').type(testData.company_name)
        cy.get('input[data-qa="address"]').type(testData.address)
        cy.get('#country').select([2])
        cy.get('#state').type(testData.state)
        cy.get('#city').type(testData.city)
        cy.get('#zipcode').type(testData.zip_code)
        cy.get('#mobile_number').type(testData.mobile_number)
        cy.get('button[data-qa="create-account"]').should('be.visible').and('have.text', 'Create Account')
        cy.get('button[data-qa="create-account"]').click()
        cy.contains('Account Created!').should('be.visible').and('have.text', 'Account Created!')

    })

})
