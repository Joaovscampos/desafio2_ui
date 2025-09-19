Cypress.Commands.add('formsPage', () => {
    cy.visit('/');
    cy.contains('h5', 'Forms').click();
    cy.url()
        .should('include', '/forms');
    cy.contains('span', 'Forms')
        .click();
    cy.contains('span', 'Practice Form')
        .should('be.visible')
        .click();
    cy.url()
        .should('include', '/automation-practice-form');
});

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

Cypress.Commands.add('fillStudentForm', ({
  firstName,
  lastName,
  email,
  gender,
  mobile,
  subject,
  hobbies,
  filePath,
  address,
  state
}) => {
  // Name
  cy.get('input[placeholder="First Name"]').type(firstName);
  cy.get('input[placeholder="Last Name"]').type(lastName);

  // Email
  cy.get('#userEmail').type(email);

  // Gender
  cy.contains('label', gender).click();

  // Mobile
  cy.get('input[placeholder="Mobile Number"]').type(mobile, { force: true });

  // Subjects
  cy.get('#subjectsContainer').type(`${subject}{enter}`);

  // Hobbies
  cy.get('#hobbiesWrapper').contains(hobbies).click();

  // Upload file
  cy.get('#uploadPicture').selectFile(filePath);

  // Address
  cy.get('textarea[placeholder="Current Address"]').type(address);

  // State
    cy.get('#state').click().contains(state).click();
  // City
    cy.get('#city').type('{enter}');
});
