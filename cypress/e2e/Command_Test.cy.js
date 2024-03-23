import Chance from "chance";
const generateEmail = new Chance();
const email = generateEmail.email();
const fn = generateEmail.name()


describe ('Command Class',() => {

    it('Test with Commands', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.signUp(email,fn)

    });

})
