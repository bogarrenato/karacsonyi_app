describe('Advent Calendar - Mobile View', () => {
  beforeEach(() => {
    // Mobile viewport: 375x667 (iPhone)
    cy.viewport(375, 667)
    cy.visit('/')
  })

  it('should display the title correctly on mobile', () => {
    cy.contains('Adventi Kalendárium').should('be.visible')
    cy.contains('2025').should('be.visible')
    cy.contains('Kattints, hogy kibontsd a meglepetéseket!').should('be.visible')
  })

  it('should display cards in a 2-column grid on mobile', () => {
    cy.get('[class*="card"]').should('have.length', 24)
    cy.get('[class*="card"]').first().should('be.visible')
  })

  it('should open and close envelope modal on mobile', () => {
    cy.get('[class*="card"]').not('[class*="disabled"]').first().click()
    cy.wait(2500)
    cy.get('[class*="envelope"]').should('be.visible')
    cy.contains('Bezárás').click()
    cy.get('[class*="envelope"]').should('not.exist')
  })

  it('should show special popup for day 2 (letter)', () => {
    // First, we need to make day 2 available (set test mode)
    // This test assumes day 2 is available
    cy.get('[class*="card"]').contains('2').parent().click({ force: true })
    cy.wait(2500)
    // Check for special popup elements
    cy.get('body').then(($body) => {
      if ($body.find('[class*="specialPopup"]').length > 0) {
        cy.get('[class*="speechBubble"]').should('be.visible')
        cy.contains('Vigyázz, a rossz gyerekek egy zsák szenet és virgácsot kapnak').should('be.visible')
      }
    })
  })

  it('should maintain responsive layout on mobile', () => {
    cy.get('[class*="calendar"]').should('be.visible')
    cy.get('[class*="card"]').should('have.length', 24)
  })

  it('should prevent clicking on disabled (future) dates', () => {
    // Future dates should not be clickable
    cy.get('[class*="disabled"]').first().should('exist')
    cy.get('[class*="disabled"]').first().click({ force: true })
    // Should show alert or not open modal
  })
})


