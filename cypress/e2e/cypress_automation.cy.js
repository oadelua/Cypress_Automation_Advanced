describe('test flow', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()                 //  CSS selector is being used in this case
    cy.get('a[href="/login"]').click()                                       //   Tagname & attribute: a = tagname & attribute = href="/login" ->  cy.get('tagname[attribute]').click()
    cy.get('.btn.btn-success').click()                                        //    Class is used in this case. The element used in this case is "Testcases"
    cy.contains('Signup / Login').click()                                         //     The name of the text element is located in this case
    cy.contains('a', 'Signup / Login').click()                                    //      Tagname and Text is used in this case.
    cy.get('.nav.navbar-nav').find('.fa.fa-shopping-cart').click()                //      Class is used in this case. It starts with a full stop. This code finds the Cart which is an element under the entire LIST
    cy.get('input[placeholder="Email Address"]').eq(0).type('automation.cypress@yopmail.com')            // This helps to identify which of the email addresses to input. Whether for Login or Signup. EQ helps you identify and select the particular index in the array 
    cy.get('input[placeholder="Email Address"]').first().type('oadelua')           // This selects the first email address field
    cy.get('input[placeholder="Email Address"]').last().type('oadelua')           // This selects the last email address field

  })
})