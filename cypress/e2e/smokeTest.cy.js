describe("Smoke Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8081/products").as("getProduct");
    cy.intercept("POST", "http://localhost:8081/login").as("PostLogin");

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
    cy.login();
    cy.wait("@PostLogin");
    cy.openProduct();
    cy.get('[data-cy="detail-product-add"]')
      .should("exist")
      .contains("Ajouter au panier");
  });
  it("Verify the presence of the product availability field if I am logged in.", () => {
    cy.login();
    cy.wait("@PostLogin");
    cy.openProduct();
    cy.get('[data-cy="detail-product-stock"]').should("exist");
  });

  it("Verify the presence of the product availability field If I am not logged in.", () => {
    cy.openProduct();
    cy.get('[data-cy="detail-product-stock"]').should("exist");
  });
});
