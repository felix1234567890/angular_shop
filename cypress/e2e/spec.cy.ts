describe('Angular Shop', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the navbar', () => {
    cy.get('app-navbar').should('exist');
  });

  it('should display cart container', () => {
    cy.get('app-cart-container').should('exist');
  });

  it('should display cart items', () => {
    cy.get('app-cart-item').should('exist');
  });

  it('should update cart when adding items', () => {
    // This is a placeholder test - update with actual add to cart functionality
    cy.get('app-cart-container').should('exist');
    // Add more specific tests based on your actual implementation
  });
});
