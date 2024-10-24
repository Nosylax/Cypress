describe("Product Sheet Request", () => {
  it("Request for a specific product sheet", () => {
    const productId = 3;
    cy.request({
      method: "GET",
      url: "http://localhost:8081/products/3",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", productId);
      expect(response.body).to.have.property("name");
      expect(response.body).to.have.property("availableStock");
      expect(response.body).to.have.property("skin");
      expect(response.body).to.have.property("aromas");
      expect(response.body).to.have.property("ingredients");
      expect(response.body).to.have.property("description");
      expect(response.body).to.have.property("price");
      expect(response.body).to.have.property("picture");
      expect(response.body).to.have.property("varieties");
    });
  });
});
