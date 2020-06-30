const express = require("express");
const router = express.Router();

router.post("/:id/comments", (req, resp) => {
    resp.send(201);
});

router.get("/:id/comments", (req, resp) => {
    resp.status(200)
        .send({
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        });
});

module.exports = router;