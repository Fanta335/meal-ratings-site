const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const { MySQLclient, sql } = require("../lib/database/client");
  let data;

  try {
    await MySQLclient.connect();
    data = await MySQLclient.query(sql("SELECT_MEAL.sql"), [1]);
    console.log(data);
    res.render("./index.ejs", { meals: data });
  } catch (err) {
    next(err);
  } finally {
    await MySQLclient.end();
  }
});

module.exports = router;
