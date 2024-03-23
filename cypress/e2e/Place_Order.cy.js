import Chance from "chance";
const generateEmail = new Chance();
const email = generateEmail.email();

let testData;

describe('Place_Order_Flow', () => {
    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('a[href="/login"]').click()

        cy.fixture('Test_data').then((data) => {

            testData = data;
        })

    })
    it('Sign_Up', () => {
        cy.signUp(email)

    });

    it('Login', () => {
        cy.Login(testData.email, testData.password)


    });

    it('Place order', () => {
        cy.Login(testData.email, testData.password)
        cy.get('a[href="/products"]').click()
        cy.get('input[placeholder="Search Product"]').click().type('Men Tshirt')
        cy.get('.fa.fa-search').click()
        cy.get('.btn.btn-default.add-to-cart').eq(0).click()
        cy.contains('u', 'View Cart').click()
        cy.get('.btn.btn-default.check_out').click()
        cy.contains('Review Your Order').should('be.visible')
        cy.get('a[href="/payment"]').click()
        cy.get('input[data-qa="name-on-card"]').type('naivasha')
        cy.get('input[data-qa="card-number"]').type(234567890)
        cy.get('input[data-qa="cvc"]').type(900)
        cy.get('.form-control.card-expiry-month').type(23)
        cy.get('input[data-qa="expiry-year"]').type(1234)
        cy.get('button[data-qa="pay-button"]').click()
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')





    })

});