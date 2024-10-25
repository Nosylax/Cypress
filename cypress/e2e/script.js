export function login() {
  cy.get('[data-cy="nav-link-login"]').click();
  cy.get('[data-cy="login-input-username"]').type("test2@test.fr");
  cy.get('[data-cy="login-input-password"]').type("testtest");
  cy.get('[data-cy="login-submit"]').click();
}

export function openProduct() {
  cy.wait(500);
  cy.get('[data-cy="nav-link-products"]').click();
  cy.get(':nth-child(3) > .add-to-cart > [data-cy="product-link"]').click();
}
