class CartPage {

    addBackpackButton = "#add-to-cart-sauce-labs-backpack";
    removeBackpackButton = "#remove-sauce-labs-backpack";
    cartBadge = ".shopping_cart_badge";
    cartIcon = ".shopping_cart_link";
    cartItem = ".cart_item";

    verifyBackpackInCart() {
    cy.contains("Sauce Labs Backpack")
        .should("be.visible");
    }

    addProduct() {
        cy.get(this.addBackpackButton).click();
    }

    removeProduct() {
        cy.get(this.removeBackpackButton).click();
    }

    openCart() {
        cy.get(this.cartIcon).click();
    }

    verifyCartCount(count) {
        cy.get(this.cartBadge)
            .should("have.text", count);
    }

    verifyCartIsEmpty() {
        cy.get(this.cartItem)
            .should("not.exist");
    }

}

export default CartPage;