class CheckoutPage {

    checkoutButton = "#checkout";
    firstName = "#first-name";
    lastName = "#last-name";
    postalCode = "#postal-code";
    continueButton = "#continue";
    finishButton = "#finish";
    completeHeader = ".complete-header";

    startCheckout() {
        cy.get(this.checkoutButton).click();
    }

    enterCheckoutInformation(first, last, zip) {
        cy.get(this.firstName).type(first);
        cy.get(this.lastName).type(last);
        cy.get(this.postalCode).type(zip);
    }

    continueCheckout() {
        cy.get(this.continueButton).click();
    }

    finishCheckout() {
        cy.get(this.finishButton).click();
    }

    verifySuccessfulOrder() {
        cy.get(this.completeHeader)
            .should("contain", "Thank you");
    }
}

export default CheckoutPage;