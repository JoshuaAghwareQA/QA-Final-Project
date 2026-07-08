describe("API Mocking Demo", () => {

    it("should mock a users API response", () => {

        cy.intercept(
            "GET",
            "https://dummyjson.com/users",
            {
                statusCode: 200,
                body: {
                    users: [
                        {
                            id: 1,
                            firstName: "Joshua"
                        }
                    ]
                }
            }
        ).as("users");

        cy.visit("/");

        cy.window().then((win) => {
           return win.fetch("https://dummyjson.com/users");
        });

        cy.wait("@users")
            .its("response.body.users[0].firstName")
            .should("eq", "Joshua");

    });

});