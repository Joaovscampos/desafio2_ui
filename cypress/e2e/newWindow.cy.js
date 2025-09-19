describe('New Window', () => {
    it('should open a new window and validate its content', () => {
    //ignore uncaught exceptions
    cy.on('uncaught:exception', () => false);

    //use commands to open the page
    cy.browserWindowsPage();

    //intercept the new window
    cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
        }).as('windowOpen');
    });

    //click on the new window button
    cy.get('#windowButton').click();

    //check if the new page url is correct
    cy.url().should('eq', 'https://demoqa.com/sample');

    //check if the page title is correct
    cy.get('h1').should('have.text', 'This is a sample page');

    //back to main page
    cy.go('back');
    });
  
})
