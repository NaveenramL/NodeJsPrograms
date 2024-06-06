const express = require("express");

const app = express();

app.get("/", (req, res) => {

});

app.get("/new", (req, res) => {

});

app.listen(9000);

const route = require("./users");

app.use("/users",route);