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

  it('should display exactly 3 cart items by default', () => {
    cy.get('app-cart-item').should('have.length', 3);
  });

  it('should increase quantity when clicking up arrow', () => {
    // Get the first item's initial quantity
    cy.get('app-cart-item').first().find('.amount').invoke('text').then((initialQuantity) => {
      // Click the increase button
      cy.get('app-cart-item').first().find('.amount-btn').first().click();

      // Verify quantity increased by 1
      cy.get('app-cart-item')
        .first()
        .find('.amount')
        .should('have.text', String(Number(initialQuantity) + 1));
    });
  });

  it('should decrease quantity when clicking down arrow', () => {
    // First increase the quantity
    cy.get('app-cart-item').first().find('.amount-btn').first().click();

    // Get the quantity after increase
    cy.get('app-cart-item').first().find('.amount').invoke('text').then((quantity) => {
      // Click the decrease button
      cy.get('app-cart-item').first().find('.amount-btn').last().click();

      // Verify quantity decreased by 1
      cy.get('app-cart-item')
        .first()
        .find('.amount')
        .should('have.text', String(Number(quantity) - 1));
    });
  });

  it('should remove item when decreasing quantity at 1', () => {
    // Count initial number of items
    cy.get('app-cart-item').should('have.length', 3);

    // Click decrease on an item with quantity 1
    cy.get('app-cart-item').first().find('.amount-btn').last().click();

    // Verify item was removed
    cy.get('app-cart-item').should('have.length', 2);
  });
});
