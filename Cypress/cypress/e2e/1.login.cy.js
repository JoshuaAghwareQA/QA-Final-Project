import LoginPage from "../pages/1.LoginPage.js";

const loginPage = new LoginPage();

describe("Login", () => {

    beforeEach(() => {
        loginPage.visit();
    });

    it("TC01 - should login successfully with valid credentials", () => {

        // Arrange
        cy.fixture("users").then((users) => {

            // Act
            loginPage.login(
                users.validUser.username,
                users.validUser.password
            );

            // Assert
            cy.url().should("include", "/inventory.html");
        });

    });

    it("TC02 - should display an error for invalid credentials", () => {

        // Arrange
        cy.fixture("users").then((users) => {

            // Act
            loginPage.login(
                users.invalidUser.username,
                users.invalidUser.password
            );

            // Assert
            loginPage
                .getErrorMessage()
                .should("contain", "Username and password do not match");
        });

    });

    it("TC03 - should display an error when fields are empty", () => {

        // Act
        loginPage.clickLogin();

        // Assert
        loginPage
            .getErrorMessage()
            .should("contain", "Username is required");

    });

});