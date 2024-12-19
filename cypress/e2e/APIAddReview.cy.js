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
          title: "TESgdfT",
          comment: "TESgdT",
          rating: 5,
        },
      }).then((response) => {
        console.log(response);
        expect(response.status).to.eq(200);
        const title = response.body.title;
        const comment = response.body.comment;
        const id = response.body.id;

        //Rajouter reponse et avec commentaire js//

        cy.request({
          method: "GET",
          url: "http://localhost:8081/reviews",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          console.log(response);
          expect(response.status).to.eq(200);

          expect(response.body[0]).to.have.property("title", title);
          expect(response.body[0]).to.have.property("comment", comment);
          expect(response.body[0]).to.have.property("id", id);
        });
      });
    });
  });
});
