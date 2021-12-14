const path = require("path");

const { mysqlFileLoader } = require("./fileLoader");
const sql = mysqlFileLoader(path.join(__dirname, "/sql/"));
const pool = require("./pool");

const MySQLClient = {
  executeQuery: async (query, values) => {
    let results = await pool.executeQuery(query, values);
    return results;
  },
};

module.exports = {
  MySQLClient,
  sql,
};
