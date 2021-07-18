describe('Launch Website', function () {
    it('Goes to the website', function () {
        cy.visit('http://localhost:3000/pizza')

    })
})

describe('Name Check', function () {
    it('Checks the name input field', function () {

        cy.get('[name=name]')
            .type('Mykael')
            .should('have.value', 'Mykael')
    })
})


describe('Toppings Check', function () {
    it('Checks the Terms of Service checkbox input field', function () {
        cy.get('[type="checkbox"]').check().should('be.checked')

    })
})

describe('Submit Check', function () {
    it('Checks to see if the user can submit', function () {
        cy.get('form').submit().click()

    })
})