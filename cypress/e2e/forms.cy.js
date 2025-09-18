import { faker } from '@faker-js/faker';

describe('Forms', () => {
    
    before(() => {
        cy.formsPage();
    })
    
    it('should submit a form', () => {
    const genders = ["Male", "Female", "Other"];
    const hobbies = ["Sports", "Reading", "Music"];
    const state = ["NCR", "Uttar Pradesh", "Haryana", "Rajasthan"];
    const subject = ["Arts", "Commerce", "Computer Science"];

    const studentData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        gender: faker.helpers.arrayElement(genders),
        mobile: faker.string.numeric(10), 
        subject: faker.helpers.arrayElement(subject),
        hobbies: faker.helpers.arrayElement(hobbies),
        filePath: "cypress/fixtures/example.json",
        address: faker.location.streetAddress(),
        state: faker.helpers.arrayElement(state),
    };
        cy.fillStudentForm(studentData);
        cy.contains('button', 'Submit').click();
        cy.contains('div', 'Thanks for submitting the form').should('be.visible');
        cy.contains('button', 'Close').click();
    });
});