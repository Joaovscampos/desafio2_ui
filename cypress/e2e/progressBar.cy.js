describe('Progress Bar', () => {
    before(() => {
        cy.progressBarPage();
    });
    
    it('should validate that the progress bar value is less than or equal to 25%', () => {
    cy.get('#startStopButton').click();

    
    cy.get('.progress-bar').should(($bar) => {
        const value = parseInt($bar.attr('aria-valuenow'));
        
        if (value > 25) {
            cy.get('#startStopButton').click();
        }
        expect(value).to.be.lte(25);
    });

    
    cy.get('.progress-bar').invoke('attr', 'aria-valuenow').then((val) => {
        expect(parseInt(val)).to.be.lte(25);
    });

    
    cy.get('#startStopButton').click();

    
    cy.get('.progress-bar', { timeout: 10000 }).should(($bar) => {
        const value = parseInt($bar.attr('aria-valuenow'));
        if (value === 100) {
            cy.get('#startStopButton').click();
        }
        expect(value).to.be.lte(100);
        });
    });
});