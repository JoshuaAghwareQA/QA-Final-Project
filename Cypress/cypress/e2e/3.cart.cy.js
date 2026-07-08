import LoginPage from "../pages/1.LoginPage";
import CartPage from "../pages/3.CartPage";

const loginPage = new LoginPage();
const cartPage = new CartPage();

describe("Cart Feature", () => {

    beforeEach(() => {

        loginPage.visit();

        cy.loginAsStandardUser();

    });

    it("TC01 - should add a product to the cart", () => {

        // Act
        cartPage.addProduct();
        cartPage.openCart();

        // Assert
        cartPage.verifyBackpackInCart();

    });

    it("TC02 - should remove a product from the cart", () => {

        // Arrange
        cartPage.addProduct();

        // Act
        cartPage.removeProduct();
        cartPage.openCart();

        // Assert
        cartPage.verifyCartIsEmpty();

    });

    it("TC03 - should update the cart count", () => {

        // Act
        cartPage.addProduct();

        // Assert
        cartPage.verifyCartCount("1");

    });

});