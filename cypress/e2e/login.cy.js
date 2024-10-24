import { login, openProduct } from "./script.js";
describe("Login", () => {
  it("You must be logged in and see the cart button.", () => {
    cy.visit("/");
    login();
    // cy.request({
    //   method: "POST",
    //   url: "http://localhost:8081/login",
    //   body: {
    //     username: "test2@test.fr",
    //     password: "testtest",
    //   },
    // }).then((response) => {
    //   expect(response.status).to.eq(200);
    //   expect(response.body).to.have.property("token");
    // });
    cy.get('[data-cy="nav-link-cart"]').should("exist").contains("Mon panier");
  });
});
