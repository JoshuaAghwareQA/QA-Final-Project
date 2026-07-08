class MenuPage {

    menuButton = "#react-burger-menu-btn";
    logoutLink = "#logout_sidebar_link";

    openMenu() {
        cy.get(this.menuButton).click();
    }

    clickLogout() {
        cy.get(this.logoutLink).click();
    }

    logout() {
        this.openMenu();
        this.clickLogout();
    }
}

export default MenuPage;