const PORT = process.env.PORT;
const path = require("path");
const favicon = require("serve-favicon");
const express = require("express");
const app = express();

// template engine setting
app.set("view engine", "ejs");

// static source settings
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// Dynamic resource routing
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});
