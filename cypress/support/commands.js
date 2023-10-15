// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getActualTable', () => {
    cy.get('#table1 tbody tr').then(($cells) => {
       let table = Cypress._.map($cells, "innerText").map((row) =>
         row.split("\t").filter((el) => el != "edit delete")
       );
       console.log('actualTable', table);
       return table;
       });
});

Cypress.Commands.add('getExpectedSortedTable', (table) => {
    const expectedTable1 = Cypress._.sortBy(table);
    return expectedTable1;
});


