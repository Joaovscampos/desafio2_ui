Cypress.Commands.add('browserWindowsPage', () => {
    cy.visit('/');
    cy.contains('h5', 'Alerts, Frame & Windows').click();
    cy.url()
        .should('include', '/alertsWindows');
    cy.contains('span', 'Browser Windows')
        .click();
    cy.url()
        .should('include', '/browser-windows');
});
