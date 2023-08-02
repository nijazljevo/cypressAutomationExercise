/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Heroku Signup Test', () => {
  it('should register a new account', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('m123m')
    cy.get('[data-qa="signup-email"]').type('korisnik01@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"]').click()
    cy.get('[data-qa="password"]').type('Mostar12.,')
    cy.get('[data-qa="days"]').select('25')
    cy.get('[data-qa="months"]').select('June')
    cy.get('[data-qa="years"]').select('1999')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('#first_name').type('Ime')
    cy.get('#last_name').type('Prezime')
    cy.get('#company').type('Komapanija')
    cy.get('#address1').type('88000 Mostar')
    cy.get('#address2').type('88202 Buna')
    cy.get('#country').select('United States')
    cy.get('#state').type('Bosna i Hercegovina')
    cy.get('#city').type('Mostar')
    cy.get('#zipcode').type('88000')
    cy.get('#mobile_number').type('+376 62111666')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('#search_product').type('Tshirt')
    cy.get('#submit_search').click()
    cy.get('.fa.fa-plus').eq(1).click()
    cy.contains('a', 'Jeans').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    cy.get('#quantity').clear().type('5');
    cy.get(':nth-child(5) > .btn').click()
    cy.contains('a', 'View Cart').click();
    cy.get('.col-sm-6 > .btn').click()
    cy.get('[name="message"]').type('comment')
    cy.get('.btn.btn-default.check_out').click()
    cy.get('[data-qa="name-on-card"]').type('visa')
    cy.get('[data-qa="card-number"]').type('4242 4242 4242 4242')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2023')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type('korisnik01@gmail.com')
    cy.get('[data-qa="login-password"]').type('Mostar12.,')
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.contains('a', 'View Cart').click();
    cy.get('.col-sm-6 > .btn').click()
    cy.get('.btn.btn-default.check_out').click()
    cy.get('[data-qa="name-on-card"]').type('visa')
    cy.get('[data-qa="card-number"]').type('4242 4242 4242 4242')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2023')
  
    cy.get('[data-qa="pay-button"]').click()
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

  });
});
