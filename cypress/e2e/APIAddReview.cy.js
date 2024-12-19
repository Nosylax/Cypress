describe("Add a review", () => {
  it("Add a review", () => {
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
        method: "POST",
        url: "http://localhost:8081/reviews",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          title: "TEST",
          comment: "TEST",
          rating: 5,
        },
      }).then((response) => {
        console.log(response);
        expect(response.status).to.eq(200);
        //Rajouter reponse et avec commentaire js//
      });
    });
  });
});
