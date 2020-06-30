const express = require("express");
const router = express.Router();

router.post("/:id/photos", (req, resp) => {
    resp.sendStatus(201);
});

router.get("/:id/photos", (req, resp) => {
    resp.status(200)
        .json({
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        });
});

module.exports = router