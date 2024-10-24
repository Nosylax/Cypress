import { login, openProduct } from "./script.js";
describe("Smoke Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verify the presence of login fields and buttons.", () => {
    cy.get('[data-cy="nav-link-login"]').should("exist").contains("Connexion");
    cy.get('[data-cy="nav-link-login"]').click();
    cy.get('[data-cy="login-input-username"]').should("exist");
    cy.get('[data-cy="login-input-password"]').should("exist");
    cy.get('[data-cy="login-submit"]').should("exist").contains("Se connecter");
  });
  it("Verify the presence of 'Add to Cart' buttons when logged in.", () => {
    login();
    openProduct();
    cy.get('[data-cy="detail-product-add"]')
      .should("exist")
      .contains("Ajouter au panier");
  });
  it("Verify the presence of the product availability field if I am logged in.", () => {
    login();
    openProduct();
    cy.get('[data-cy="detail-product-stock"]').should("exist");
  });

  it("Verify the presence of the product availability field If I am not logged in.", () => {
    openProduct();
    cy.get('[data-cy="detail-product-stock"]').should("exist");
  });
});
