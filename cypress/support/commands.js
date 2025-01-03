Cypress.Commands.add("login", () => {
  cy.get('[data-cy="nav-link-login"]').click();
  cy.get('[data-cy="login-input-username"]').type("test2@test.fr");
  cy.get('[data-cy="login-input-password"]').type("testtest");
  cy.get('[data-cy="login-submit"]').click();
});

Cypress.Commands.add("openProduct", () => {
  cy.get('[data-cy="nav-link-products"]').click();
  cy.wait("@getProduct");
  cy.get(':nth-child(3) > .add-to-cart > [data-cy="product-link"]').click();
});

Cypress.Commands.add("loginAPI", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:8081/login",
    body: {
      username: "test2@test.fr",
      password: "testtest",
    },
  }).then((response) => {
    return response.body.token;
  });
});

Cypress.Commands.add("ClearCard", () => {
  cy.get('[data-cy="nav-link-cart"]').click();
  cy.wait("@GetCart");
  cy.get("body").then((body) => {
    if (body.find('[data-cy="cart-line"]').length > 0) {
      cy.get('[data-cy="cart-line-delete"]').each(($btn) => {
        cy.wrap($btn).click();
      });
    }
  });
});
