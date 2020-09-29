/// <reference types="Cypress" />

describe('Button Tester', () => {
    it('Test Passed!', () => {
      cy.visit('http://localhost:5000')
      cy.get('button').click()
      cy.contains('ianedgeley@gmail.com').should('have.css', 'display', 'block')

    })
  })