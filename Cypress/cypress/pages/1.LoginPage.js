class LoginPage {

    // Selectors
    usernameInput = "#user-name";
    passwordInput = "#password";
    loginButton = "#login-button";
    errorMessage = '[data-test="error"]';

    // Actions
    visit() {
        cy.visit("/");
    }

    enterUsername(username) {
        cy.get(this.usernameInput).clear().type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).clear().type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    getErrorMessage() {
        return cy.get(this.errorMessage);
    }
}

export default LoginPage;