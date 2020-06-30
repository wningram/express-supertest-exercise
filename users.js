const express = require("express");
const router = express.Router();

router.post("/:userId/albums", (req, resp) => {
    resp.sendStatus(201);
});

router.get("/:userId/albums", (req, resp) => {
    resp.status(200)
        .json({
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
        });
});

router.post("/:userid/todos", (req, resp) => {
    resp.sendStatus(201);
});

router.get("/:userId/todos", (req, resp) => {
    resp.status(200)
        .json({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        });
});

router.post("/:userId/posts", (req, resp) => {
    resp.sendStatus(201);
});

router.get("/:userId/posts", (req, resp) => {
    resp.status(200)
        .json({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        });
});

module.exports = router;