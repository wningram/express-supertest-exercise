describe("POST /posts", () => {
    let app;
    var request = require("supertest");

    beforeEach(() => {
        delete require.cache[require.resolve('../index')]
        app = require('../index')
        request = request(app.app);
    });

    it("Returns 201 status", (done) => {
        request.post("/posts/1/comments")
            .expect(201, done);
    });

    afterEach(() => {
        app.server.close();
    });
});

describe("GET /posts", () => {
    let app;
    var request = require("supertest");

    beforeEach(() => {
        delete require.cache[require.resolve('../index')]
        app = require('../index')
        request = request(app.app);
    });

    let expectedCommnent = {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }

    it("Returns correct data", (done) => {
        request.get("/posts/1/comments")
            .expect(200)
            .expect(resp => expect(resp.body).toStrictEqual(expectedCommnent))
            .end(done);
    });

    afterEach(() => {
        app.server.close();
    });
});