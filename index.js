const express = require("express");
const app = express();
const posts = require("./posts");
const albums = require("./albums");
const users = require("./users");

const port = 8081;

app.use("/posts", posts);
app.use("/albums", albums);
app.use("/users", users);

let server = app.listen(port);

module.exports = {
    server: server,
    app: app
};