import LoginPage from "../pages/1.LoginPage";
import InventoryPage from "../pages/2.InventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Inventory", () => {

    beforeEach(() => {

        loginPage.visit();
        cy.loginAsStandardUser();

    });

    it("TC01- should load all inventory items", () => {

        // Assert
        inventoryPage.verifyInventoryLoaded();
        inventoryPage.verifyProductsDisplayed();

    });

    it("TC02 - should display product names", () => {

        // Assert
        inventoryPage.verifyProductNamesVisible();

    });

    it("TC03 - should intercept inventory requests", () => {

        cy.intercept("GET", "**").as("pageRequest");

        cy.reload();

        cy.wait("@pageRequest");

        inventoryPage.verifyInventoryLoaded();

    });

});