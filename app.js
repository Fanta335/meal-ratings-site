const PORT = process.env.PORT;
const path = require("path");
const favicon = require("serve-favicon");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(favicon(path.join(__dirname, "/public/favicon.ico")));

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});
