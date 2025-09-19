Cypress.Commands.add('registerPage', () => {
    cy.visit('/');
    cy.contains('h5', 'Elements').click();
    cy.url()
        .should('include', '/elements');
    cy.contains('span', 'Web Tables')
        .click();
    cy.url()
        .should('include', '/webtables');
});

Cypress.Commands.add('validateTableData', (email, firstName, lastName, age, salary, department) => {
    cy.get(".rt-tr-group")
        .contains("div", email)
        .parent()
        .within(() => {
            cy.contains("div", firstName).should("be.visible");
            cy.contains("div", lastName).should("be.visible");
            cy.contains("div", age).should("be.visible");
            cy.contains("div", email).should("be.visible");
            cy.contains("div", salary).should("be.visible");
            cy.contains("div", department).should("be.visible");    
        })
  });     


Cypress.Commands.add('createRegister', (firstName, lastName, email, age, salary, department) => {
  cy.get('#addNewRecordButton').click(); 

  cy.get('#firstName').type(firstName);
  cy.get('#lastName').type(lastName);
  cy.get('#userEmail').type(email);
  cy.get('#age').type(age);
  cy.get('#salary').type(salary);
  cy.get('#department').type(department);

  cy.get('#submit').click();
}); 

Cypress.Commands.add('editRegister', (email, newFirstName, newLastName, newUserEmail, newAge, newSalary, newDepartment) => {
  cy.contains('.rt-tr-group', email).within(() => {
  
  cy.get('span[title="Edit"]').click({ force: true });
  });

  if (newFirstName) {
    cy.get('#firstName').clear().type(newFirstName);
  }
  if (newLastName) {
    cy.get('#lastName').clear().type(newLastName);
  }
  if (newUserEmail) {
    cy.get('#userEmail').clear().type(newUserEmail);
  }
  if (newAge) {
    cy.get('#age').clear().type(newAge);
  }
  if (newSalary) {
    cy.get('#salary').clear().type(newSalary);
  }
  if (newDepartment) {
    cy.get('#department').clear().type(newDepartment);
  }

  cy.get('#submit').click();
});

Cypress.Commands.add('deleteRegister', (email) => {
  cy.contains('.rt-tr-group', email).within(() => {
    cy.get('span[title="Delete"]').click({ force: true });
  });
})
