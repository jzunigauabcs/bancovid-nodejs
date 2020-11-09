const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/static", express.static(path.join(__dirname, "public")));

require("./routes")(app);

module.exports = app;
