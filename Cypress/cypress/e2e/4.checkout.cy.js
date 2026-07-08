import LoginPage from "../pages/1.LoginPage.js";
import CartPage from "../pages/3.CartPage.js";
import CheckoutPage from "../pages/4.CheckoutPage.js";

const loginPage = new LoginPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe("Checkout Feature", () => {

    beforeEach(() => {

        loginPage.visit();

        cy.loginAsStandardUser();

        cartPage.addProduct();

        cartPage.openCart();

    });

    it("TC01 - should complete checkout successfully", () => {

        // Act
        checkoutPage.startCheckout();

        checkoutPage.enterCheckoutInformation(
            "Joshua",
            "Aghware",
            "100001"
        );

        checkoutPage.continueCheckout();

        checkoutPage.finishCheckout();

        // Assert
        checkoutPage.verifySuccessfulOrder();

    });

});