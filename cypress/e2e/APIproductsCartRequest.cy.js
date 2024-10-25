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
        method: "GET",
        url: "http://localhost:8081/products/random",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
          expect(response.status).to.eq(200);
          cy.request({
            method: "GET",
            url: "http://localhost:8081/orders",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an("object");

          const order = response.body;
          const orderLine = order.orderLines[0];
          expect(orderLine).to.have.property("product").that.is.an("object");
        });
    });
  });
});
