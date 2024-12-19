describe("Add an available product to the cart", () => {
  it("Add an available product to the cart", () => {
    cy.loginAPI().then((response) => {
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
      });
    });
  });
});
