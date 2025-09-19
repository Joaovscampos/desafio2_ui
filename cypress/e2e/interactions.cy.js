describe('Reorder List Items', () => {
  before(() => {
    cy.sortablePage();
  });

  it('should reorder list items in ascending order using drag and drop', () => {
    const targetOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    function dragItem(i) {
      if (i >= targetOrder.length) return;

      cy.get('.vertical-list-container .list-group-item.list-group-item-action:visible')
        .then(($items) => {
          const currentIndex = $items.toArray().findIndex(el => el.innerText.trim() === targetOrder[i]);

          if (currentIndex !== i) {
            cy.wrap($items[currentIndex])
              .drag(`.vertical-list-container .list-group-item.list-group-item-action:visible:eq(${i})`, { force: true })
              .then(() => dragItem(i + 1));
          } else {
            dragItem(i + 1);
          }
        });
    }

    dragItem(0);

    
    cy.get('.vertical-list-container .list-group-item.list-group-item-action:visible')
      .then(($items) => {
        const orderedTexts = $items.map((i, el) => Cypress.$(el).text().trim()).get();
        expect(orderedTexts).to.deep.equal(targetOrder);
      });
  });
});
