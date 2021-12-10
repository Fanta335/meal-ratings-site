const { nextTick } = require("process");

const router = require("express").Router();

router.get("/", async (req, res) => {
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
    data = await client.query("SELECT * FROM t_meal");
    console.log(data);
  } catch (err) {
    nextTick(err);
  } finally {
    await client.end();
  }

  // res.end("OK");
  res.render("./index.ejs");
});

module.exports = router;
