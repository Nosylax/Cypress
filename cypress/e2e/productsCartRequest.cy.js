describe("Product Sheet Request", () => {
  it("Request for a specific product sheet", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8081/login",
      body: {
        username: "test2@test.fr",
        password: "testtest",
      },
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200);
      const token = response.body.token;
      cy.request({
        method: "PUT",
        url: "http://localhost:8081/orders/add",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          product: 3,
          quantity: 1,
        },
      }).then((response) => {
        console.log(response);
        expect(response.status).to.eq(200);
        cy.request({
          method: "GET",
          url: "http://localhost:8081/orders",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          console.log(response);
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("product");
          const product = orderLine.product;
          expect(product).to.have.property("id");
          expect(product).to.have.property("name");
          expect(product).to.have.property("description");
          expect(product).to.have.property("price");
          expect(product).to.have.property("picture");
        });
      });
    });
  });
});
