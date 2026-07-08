class InventoryPage {

    inventoryContainer = ".inventory_list";
    inventoryItems = ".inventory_item";
    inventoryItemNames = ".inventory_item_name";

    verifyInventoryLoaded() {
        cy.get(this.inventoryContainer).should("be.visible");
    }

    verifyProductsDisplayed() {
        cy.get(this.inventoryItems)
            .should("have.length.greaterThan", 0);
    }

    verifyProductNamesVisible() {
        cy.get(this.inventoryItemNames)
            .each(($product) => {
                cy.wrap($product).should("be.visible");
            });
    }
}

export default InventoryPage;