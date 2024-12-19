describe("Login", () => {
  it("You must be logged in and see the cart button.", () => {
    cy.visit("/");
    cy.login();
    cy.get('[data-cy="nav-link-cart"]').should("exist").contains("Mon panier");
  });
});
