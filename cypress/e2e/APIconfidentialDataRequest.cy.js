describe("Request for confidential data", () => {
  it("Request for a user's confidential data before login to verify I receive an error.", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8081/orders",
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(403);
    });
  });
});
