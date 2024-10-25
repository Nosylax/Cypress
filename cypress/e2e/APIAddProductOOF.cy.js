describe("Add an out-of-stock product to the cart", () => {
  it("Add an out-of-stock product to the cart", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8081/login",
      body: {
        username: "test2@test.fr",
        password: "testtest",
      },
    }).then((response) => {
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
      });
    });
  });
});
