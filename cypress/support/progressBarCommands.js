Cypress.Commands.add('progressBarPage', () => {
    cy.visit('/');
    cy.contains('h5', 'Widgets').click();
    cy.url()
        .should('include', '/widgets');
    cy.contains('span', 'Progress Bar')
        .click();
    cy.url()
        .should('include', '/progress-bar');
});
