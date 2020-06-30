describe("POST /albums", () => {
    let app;
    var request;

    let testRecord = {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    };

    beforeEach(() => {
        delete require.cache[require.resolve('../index')]
        app = require('../index')
        request = require("supertest");
        request = request(app.app);
    });

    it("Returns 201 response", (done) => {
        request.post("/albums/1/photos")
            .expect(201, done);
    });

    it("Returns correct data on GET", (done) => {
        request.get("/albums/1/photos")
            .expect(200)
            .expect(resp => {
                expect(resp.body).toStrictEqual(testRecord);
            })
            .end(done);
    });

    afterEach(() => {
        app.server.close();
    });
});