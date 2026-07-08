# QA Final Project – Software Quality Testing Final Examination

## Project Overview
This project was completed as part of the **Software Quality Testing Final Examination** under the instruction of **Joseph Adagba**.

The project demonstrates skills in:

- Manual Testing
- Bug Reporting
- API Testing with Postman
- JavaScript Fundamentals
- Cypress Automation
- API Interception and Mocking
- Continuous Integration with GitHub Actions

---

## Project Objective

To design, document, and automate software testing activities for various web applications while applying industry-standard QA practices and tools.

---

## Author

**Name:** Aghware Eguono Joshua

**Course:** Manual Testing, API Testing, JavaScript & Cypress Automation

**Instructor:** Joseph Adagba

**Date:** July 2026

---

## Tools Used

- Google Sheets
- Google Docs
- Postman
- JavaScript
- Cypress
- Mochawesome Reporter
- Git & GitHub
- GitHub Actions
- Visual Studio Code

---

## Project Structure

```text
# Project Structure

```text
QA FINAL PROJECT
│
├── README.md
│
├── Bug Reports
│   └── Bug Reports.docx
│
├── Cypress
│   ├──.github
│    └── workflows
│        └── cypress.yml
│   ├── cypress
│   │   ├── e2e
│   │   │   ├── 1.login.cy.js
│   │   │   ├── 2.inventory.cy.js
│   │   │   ├── 3.cart.cy.js
│   │   │   ├── 4.checkout.cy.js
│   │   │   ├── 5.logout.cy.js
│   │   │   └── 6.intercept.cy.js
│   │   │
│   │   ├── fixtures
│   │   │   └── users.json
│   │   │
│   │   ├── pages
│   │   │   ├── 1.LoginPage.js
│   │   │   ├── 2.InventoryPage.js
│   │   │   ├── 3.CartPage.js
│   │   │   ├── 4.CheckoutPage.js
│   │   │   └── 5.MenuPage.js
│   │   │
│   │   ├── support
│   │   │   ├── commands.js
│   │   │   └── e2e.js
│   │   │
│   │   ├── reports
│   │   │   ├── assets
│   │   │   ├── videos
│   │   │   └── index.html
│   │   │
│   │   ├── screenshots
│   │   └── videos
│   │
│   ├── cypress.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── Documentation
│   ├── Theory Questions.docx
│   ├── Test Plan.docx
│   ├── API Testing Report.docx
│   └── Exploratory Testing Report.docx
│
├── JavaScript
│   ├── Question 1.js
│   ├── Question 2.js
│   ├── Question 3.js
│   └── Question 4.js
│
├── Postman
│   ├── DummyJSON Collection.json
│   └── DummyJSON Environment.json
│
├── Screenshots
│   ├── GET.png
│   ├── POST.png
│   ├── DELETE.png
│   ├── JS Question1 Output.png
│   ├── JS Question2 Output.png
│   ├── JS Question3 Output.png
│   └── JS Question4 Output.png
│
├── Test Cases
│   └── E-Commerce Test Cases.xlsx
```
## Notes

- `node_modules`and `cypress/videos` are excluded from version control using `.gitignore`.
- Mochawesome reports are generated in `Cypress/cypress/reports`.
- GitHub Actions is configured to automatically run the Cypress test suite on every push and pull request.
- Sauce Demo offers limited opportunities for meaningful API response mocking, so a dedicated `cy.intercept()` example using DummyJSON is included to demonstrate API mocking independently.
---

## Manual Testing Deliverables

### Section A
- Theory Questions

### Section B
- Positive Test Cases
- Negative Test Cases
- Edge Test Cases

### Section C
- Bug Reports

### Section D
- API Testing Documentation

### Section G
- Exploratory Testing Documentation

---

## Automation Scope

The following features were automated on SauceDemo:

### Login
- Valid Login
- Invalid Login
- Empty Fields Validation

### Inventory
- Verify Products Load
- Validate Product Names

### Cart
- Add Product
- Remove Product
- Verify Cart Count

### Checkout
- Complete Checkout
- Validate Successful Order

### Logout
- Logout Successfully

---

## Automation Framework Features

- Page Object Model (POM)
- Custom Commands
- Fixtures
- Assertions
- API Interception
- API Mocking
- Mochawesome Reporting
- GitHub Actions CI/CD

---

## API Interception and Mocking

Sauce Demo offers limited opportunities for meaningful API response mocking because its network requests are not easily exposed for stubbing.

Therefore, a dedicated `cy.intercept()` example using the DummyJSON API is included to demonstrate API interception and response mocking independently.

---

## Test Strategy

The project adopted both manual and automated testing approaches:

### Manual Testing
- Requirement Analysis
- Test Planning
- Test Case Design
- Bug Reporting
- Exploratory Testing

### Automation Testing
- Cypress End-to-End Testing
- API Interception
- Mocking
- Reporting
- Continuous Integration

---

## Reports

Mochawesome reporting was configured to generate HTML reports after every execution.

Generated reports can be found in:

```text
cypress/reports/index.html
```

---

## Continuous Integration (CI)

GitHub Actions has been configured to:

- Run Cypress tests automatically on every push.
- Run tests on every pull request.
- Upload screenshots on failure.
- Upload execution videos.
- Upload HTML reports.

---

## Running the Project

### Install Dependencies

```bash
npm install
```

### Open Cypress Test Runner

```bash
npm run cy:open
```

### Run Tests in Headless Mode

```bash
npm test
```

---

## Challenges Encountered

- Resolving Cypress import path issues.
- Implementing meaningful API mocking with SauceDemo.
- Organizing the framework using Page Object Model.
- Configuring reporting and CI/CD pipelines.

---

## Lessons Learned

- Importance of proper project structure.
- Writing maintainable automation frameworks.
- Using `cy.intercept()` for network monitoring and mocking.
- Generating reports for test execution.
- Integrating automation into CI/CD pipelines.

---

## Exploratory Testing

A 20-minute exploratory testing session was conducted on:

https://automationexercise.com

The exercise included:

- Functional exploration
- Usability assessment
- Edge case testing
- Bug identification
- Improvement suggestions

Documentation can be found in:

Documentation/ Exploratory Testing.docx

---

## Conclusion

This project demonstrates practical knowledge of Software Quality Assurance, combining manual testing techniques with modern automation practices and CI/CD integration.