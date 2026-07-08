Cypress.Commands.add("login", (username, password) => {
    cy.get("#user-name").clear().type(username);
    cy.get("#password").clear().type(password);
    cy.get("#login-button").click();
});

Cypress.Commands.add("loginAsStandardUser", () => {
    cy.fixture("users").then((users) => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );
    });
});