import { login } from "./script.js";
describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    login();
    cy.wait(500);
    cy.get('[data-cy="nav-link-cart"]').click();
    cy.wait(500);
    cy.get("body").then((body) => {
      if (body.find('[data-cy="cart-line"]').length > 0) {
        cy.get('[data-cy="cart-line-delete"]').each(($btn) => {
          cy.wrap($btn).click();
        });
      }
    });
  });
  it("Verify that the product has been added to the cart and that the stock has been updated.", () => {
    cy.intercept("PUT", "http://localhost:8081/orders/add").as("apiCallAdd");
    cy.intercept("GET", "http://localhost:8081/orders").as("apiCallOrders");

    cy.wait(500);
    cy.get('[data-cy="nav-link-products"]').click();
    cy.wait(500);
    cy.get(':nth-child(3) > .add-to-cart > [data-cy="product-link"]').click();
    cy.wait(500);

    cy.get('[data-cy="detail-product-stock"]').then((element) => {
      const initialStock = Number(element.text().match(/\d+/g));

      cy.get('[data-cy="detail-product-add"]').click();

      //vérifiez que le produit a été ajouté au panier//
      cy.wait("@apiCallAdd").then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        const order = interception.response.body;
        const orderLine = order.orderLines[0];
        const nameProduct = orderLine.product.name;
        const productQuantity = orderLine.quantity;

        cy.wait("@apiCallOrders").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
          const order = interception.response.body;
          const orderLine = order.orderLines[0];
          expect(orderLine.product).to.have.property("name", nameProduct);
          expect(orderLine).to.have.property("quantity", productQuantity);
        });

        cy.get('[data-cy="cart-line-name"]').then((element) => {
          let nameProductCart = element.text();
          expect(nameProductCart).contain(nameProduct);

          //vérifiez que le stock enlevé le nombre de produits qui sont dans le panier//
          cy.get('[data-cy="cart-line-quantity"]').then((element) => {
            const productQuantityCart = Number(element.val().match(/\d+/g));

            cy.get('[data-cy="nav-link-products"]').click();
            cy.get(
              ':nth-child(3) > .add-to-cart > [data-cy="product-link"]'
            ).click();
            cy.wait(500);
            cy.get('[data-cy="detail-product-stock"]').then((element) => {
              const updatedStock = Number(element.text().match(/\d+/g));

              expect(updatedStock).to.eq(initialStock - productQuantityCart);
            });
          });
        });
      });
    });
  });

  it("Verify the limits (negative number and number greater than 20).", () => {
    cy.get('[data-cy="nav-link-products"]').click();
    cy.get(':nth-child(3) > .add-to-cart > [data-cy="product-link"]').click();

    cy.get('[data-cy="detail-product-quantity"]').clear("");
    cy.get('[data-cy="detail-product-quantity"]').type("-10");
    cy.get('[data-cy="detail-product-add"]').click();
    cy.get('[data-cy="detail-product-quantity"]').clear("");
    cy.get('[data-cy="detail-product-quantity"]').type("25");
    cy.get('[data-cy="detail-product-add"]').click();
  });
});
afterEach(() => {
  cy.get('[data-cy="nav-link-cart"]').click();
  cy.wait(500);
  cy.get("body").then((body) => {
    if (body.find('[data-cy="cart-line"]').length > 0) {
      cy.get('[data-cy="cart-line-delete"]').each(($btn) => {
        cy.wrap($btn).click();
      });
    }
  });
});
