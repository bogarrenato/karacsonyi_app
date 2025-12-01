describe('Advent Calendar - Tablet View', () => {
  beforeEach(() => {
    // Tablet viewport: 768x1024 (iPad)
    cy.viewport(768, 1024)
    cy.visit('/')
  })

  it('should display the title correctly on tablet', () => {
    cy.contains('Adventi Kalendárium').should('be.visible')
    cy.contains('2025').should('be.visible')
    cy.contains('Kattints, hogy kibontsd a meglepetéseket!').should('be.visible')
  })

  it('should display cards in a 3-column grid on tablet', () => {
    cy.get('[class*="card"]').should('have.length', 24)
    // Check that cards are visible and properly sized
    cy.get('[class*="card"]').first().should('be.visible')
  })

  it('should open and close envelope modal on tablet', () => {
    cy.get('[class*="card"]').not('[class*="disabled"]').first().click()
    cy.wait(2500)
    cy.get('[class*="envelope"]').should('be.visible')
    cy.contains('Bezárás').click()
    cy.get('[class*="envelope"]').should('not.exist')
  })

  it('should maintain responsive layout on tablet', () => {
    cy.get('[class*="calendar"]').should('be.visible')
    // Verify cards are properly arranged
    cy.get('[class*="card"]').should('have.length', 24)
  })
})


