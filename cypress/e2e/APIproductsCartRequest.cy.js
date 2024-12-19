describe("Product Sheet Request", () => {
  it("Request for a specific product sheet", () => {
    cy.loginAPI().then((response) => {
      console.log(response);
      const token = response;
      cy.request({
        method: "PUT",
        url: "http://localhost:8081/orders/add",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          product: 4,
          quantity: 1,
        },
      }).then((response) => {
        console.log(response);
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("object");
        const order = response.body;
        const orderLine = order.orderLines[0];
        expect(orderLine.product).to.have.property("id", 4);
      });
    });
  });
});
