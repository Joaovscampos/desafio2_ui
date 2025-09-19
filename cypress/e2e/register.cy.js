import { faker } from '@faker-js/faker';

describe('register', () => {
    
    beforeEach(() => {
        cy.registerPage();
    });
    
    it('should create a new register', () => {
        //generate random data
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const age = faker.number.int({ min: 18, max: 75 });
        const salary = faker.finance.amount({ min: 2500, max: 15000, dec: 0 });
        const department = faker.commerce.department();

        //fill the form
        cy.createRegister(firstName, lastName, email, age, salary, department);

        //validate table data
        cy.validateTableData(email, firstName, lastName, age, salary, department);    
    }); 

    it('should edit a register', () => {
        //generate random data
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const age = faker.number.int({ min: 18, max: 75 });
        const salary = faker.finance.amount({ min: 2500, max: 15000, dec: 0 });
        const department = faker.commerce.department();

        //generate new data
        const newFirstName = faker.person.firstName();
        const newLastName = faker.person.lastName();
        const newEmail = faker.internet.email();
        const newAge = faker.number.int({ min: 18, max: 75 });
        const newSalary = faker.finance.amount({ min: 2500, max: 15000, dec: 0 });
        const newDepartment = faker.commerce.department();
                
        //create the register
        cy.createRegister(firstName, lastName, email, age, salary, department);

        //edit the register
        cy.editRegister(email, newFirstName, newLastName, newEmail, newAge, newSalary, newDepartment);

        //validate table data
        cy.validateTableData(newEmail, newFirstName, newLastName, newAge, newSalary, newDepartment);    
    });

    it('should delete a register', () => {
        //generate random data
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const age = faker.number.int({ min: 18, max: 75 });
        const salary = faker.finance.amount({ min: 2500, max: 15000, dec: 0 });
        const department = faker.commerce.department();

        //create the register
        cy.createRegister(firstName, lastName, email, age, salary, department);

        //delete the register
        cy.deleteRegister(email);
    })
}) 