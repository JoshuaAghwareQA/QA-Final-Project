import LoginPage from "../pages/1.LoginPage";
import MenuPage from "../pages/5.MenuPage";

const loginPage = new LoginPage();
const menuPage = new MenuPage();

describe("Logout Feature", () => {

    beforeEach(() => {

        loginPage.visit();

        cy.loginAsStandardUser();

    });

    it("TC01 - should logout successfully", () => {

        // Act
        menuPage.logout();

        // Assert
        cy.url().should("eq", "https://www.saucedemo.com/");

    });

});