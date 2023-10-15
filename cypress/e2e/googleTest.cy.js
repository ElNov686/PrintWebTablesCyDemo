/// <reference types="cypress" />
//const { _ } = Cypress;

describe("Google tables", () => {
  it.skip("print the table", () => {
    cy.visit("https://www.google.com/finance/?hl=en");

    cy.get('section[aria-labelledby="smart-watchlist-title"] .sbnBtf li').then(
    ($cells) => {
    let GoogleTable = Cypress._.map($cells, "innerText").map((row) =>
                                                                row.split("\n").filter((el) => el != "add_circle_outline")
                                                                    );
    console.table(googleTable);
        }
    );
    });

    it("print the table", () => {
        cy.visit("https://the-internet.herokuapp.com/tables");

        cy.get("#table1 tbody tr").then(($cells) => {
        let table = Cypress._.map($cells, "innerText").map((row) =>
                    row.split("\t").filter((el) => el != "edit delete")
                    );
            console.table(table);
        });
    });

    it("sort the table by lastname", () => {
        cy.visit("https://the-internet.herokuapp.com/tables");

        cy.getActualTable().then(actualTable => {
            cy.contains("Last Name").click()
            cy.getExpectedSortedTable(actualTable).then((sortedTable) => {
                console.log('sortedTable', sortedTable)
                cy.getActualTable().should('deep.equal', sortedTable)
                })
        })
    });
});