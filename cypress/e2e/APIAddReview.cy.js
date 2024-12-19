describe("Add a review", () => {
  it("Add a review", () => {
    cy.loginAPI().then((response) => {
      console.log(response);
      const token = response;
      const title = "TEST";
      const comment = "TEST";
      const rating = 5;
      cy.request({
        method: "POST",
        url: "http://localhost:8081/reviews",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          title: title,
          comment: comment,
          rating: rating,
        },
      }).then((response) => {
        console.log(response);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("title", title);
        expect(response.body).to.have.property("comment", comment);
        expect(response.body).to.have.property("rating", rating);
      });
    });
  });
});
