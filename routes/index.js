const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const { MySQLClient, sql } = require("../lib/database/client");
  let data;

  try {
    data = await MySQLClient.executeQuery(sql("SELECT_MEAL.sql"), [1]);
    console.log(data);
    res.render("./index.ejs", { meals: data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
