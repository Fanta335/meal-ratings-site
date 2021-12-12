const router = require("express").Router();
const path = require("path");
const { mysqlFileLoader } = require("../lib/database/fileLoader");

router.get("/", async (req, res, next) => {
  const { promisify } = require("util");
  const config = require("../config/mysql.config.js");
  const mysql = require("mysql");
  const con = mysql.createConnection({
    host: config.HOST,
    port: config.PORT,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE,
  });
  const client = {
    connect: promisify(con.connect).bind(con),
    query: promisify(con.query).bind(con),
    end: promisify(con.end).bind(con),
  };
  let data;

  try {
    await client.connect();
    data = await client.query(mysqlFileLoader(path.join(path.resolve(__dirname, ".."), "/lib/database/sql"))("SELECT_MEAL.sql"));
    console.log(data);
    res.render("./index.ejs", { meals: data });
  } catch (err) {
    next(err);
  } finally {
    await client.end();
  }
});

module.exports = router;
