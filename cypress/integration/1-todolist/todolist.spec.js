describe('TODO List', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000/')
  })

  it('Add task', function () {
    cy.get('[role="input-task"]').type('Pasta{enter}')
    cy.get('[role="status"]').should('have.text', '0/1')
  })

  it('Remove task', function () {
    cy.get('[role="input-task"]').type('Pasta{enter}')
    cy.get('[role="status"]').should('have.text', '0/1')
    cy.get('[role="input-task"]').type('Pesto{enter}')
    cy.get('[role="status"]').should('have.text', '0/2')
    cy.get('[role="remove-task"]:first').click()
    cy.get('[role="status"]').should('have.text', '0/1')
  })

  it('Remove all tasks', function () {
    cy.get('[role="input-task"]').type('Pasta{enter}')
    cy.get('[role="status"]').should('have.text', '0/1')
    cy.get('[role="input-task"]').type('Pesto{enter}')
    cy.get('[role="status"]').should('have.text', '0/2')
    cy.get('[role="remove-all-tasks"]').click()
    cy.get('[role="status"]').should('have.length', 0)
  })

  it('Check all tasks', function () {
    cy.get('[role="input-task"]').type('Pasta{enter}')
    cy.get('[role="status"]').should('have.text', '0/1')
    cy.get('[role="input-task"]').type('Pesto{enter}')
    cy.get('[role="status"]').should('have.text', '0/2')
    cy.get('[role="check-all-tasks"]').click()
    cy.get('[role="status"]').should('have.text', '2/2')
  })

  it('Check task', function () {
    cy.get('[role="input-task"]').type('Task 1 {enter}')
    cy.get('[role="status"]').should('have.text', '0/1')
    cy.get('[role="check-task"]').click()
    cy.get('[role="status"]').should('have.text', '1/1')
  })
})
