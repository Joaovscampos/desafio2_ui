Cypress.Commands.add('sortablePage', () => {
    cy.visit('/');
    cy.contains('h5', 'Interactions').click();
    cy.url()
        .should('include', '/interaction');
    cy.contains('span', 'Sortable')
        .click();
    cy.url()
        .should('include', '/sortable');
});
