describe('Advent Calendar - Desktop View', () => {
  beforeEach(() => {
    // Desktop viewport: 1920x1080
    cy.viewport(1920, 1080)
    cy.visit('/')
  })

  it('should display the title correctly', () => {
    cy.contains('Adventi Kalendárium').should('be.visible')
    cy.contains('2025').should('be.visible')
    cy.contains('Kattints, hogy kibontsd a meglepetéseket!').should('be.visible')
  })

  it('should display all 24 advent cards in a 6x4 grid', () => {
    cy.get('[class*="card"]').should('have.length', 24)
  })

  it('should show disabled state for future dates', () => {
    // Assuming current date logic - future dates should be disabled
    // This will depend on the actual date
    cy.get('[class*="disabled"]').should('exist')
  })

  it('should open envelope modal when clicking on an available day', () => {
    // Click on the first available (non-disabled) card
    cy.get('[class*="card"]').not('[class*="disabled"]').first().click()
    cy.wait(2500) // Wait for animation
    cy.get('[class*="envelope"]').should('be.visible')
  })

  it('should close envelope modal when clicking close button', () => {
    cy.get('[class*="card"]').not('[class*="disabled"]').first().click()
    cy.wait(2500)
    cy.contains('Bezárás').click()
    cy.get('[class*="envelope"]').should('not.exist')
  })

  it('should be responsive and maintain layout', () => {
    cy.get('[class*="calendar"]').should('be.visible')
    cy.get('[class*="card"]').should('have.length', 24)
  })
})

