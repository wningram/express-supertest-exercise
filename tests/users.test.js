const expressSupertestExercise = require('..');

describe("/users/:id/albums", () => {
    let app;
    let request;

    let testAlbumData = {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    };

    beforeEach(() => {
        delete require.cache[require.resolve('../index')]
        app = require('../index')
        request = require("supertest");
        request = request(app.app);
    });

    it("Post returns 201", (done) => {
        request.post("/users/1/albums")
            .expect(201, done);
    });

    it("Get returns 200 and data", (done) => {
        request.get("/users/1/albums")
            .expect(200)
            .expect(resp => expect(resp.body).toStrictEqual(testAlbumData))
            .end(done);
    });

    afterEach(() => {
        app.server.close();
    });
});

describe("/users/:id/todos", () => {
    let app;
    let request;

    let testTodoData = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };

    beforeEach(() => {
        delete require.cache[require.resolve('../index')]
        app = require('../index')
        request = require("supertest");
        request = request(app.app);
    });

    it("Post returns 201", (done) => {
        request.post("/users/1/todos")
            .expect(201, done);
    });

    it("Get returns correct value and status code 200", (done) => {
        request.get("/users/1/todos")
            .expect(200)
            .expect(resp => expect(resp.body).toStrictEqual(testTodoData))
            .end(done);
    });

    afterEach(() => {
        app.server.close();
    });
});


describe("/users/:id/posts", () => {
    let app;
    let request;

    let testPostData = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };

    beforeEach(() => {
        delete require.cache[require.resolve('../index')]
        app = require('../index')
        request = require("supertest");
        request = request(app.app);
    });

    it("Post returns 201", (done) => {
        request.post("/users/:userId/posts")
            .expect(201, done);
    })

    it("Get returns data and 200 status", (done) => {
        request.get("/users/:userId/posts")
            .expect(200)
            .expect(resp => expect(resp.body).toStrictEqual(testPostData))
            .end(done);
    });

    afterEach(() => {
        app.server.close();
    });
});