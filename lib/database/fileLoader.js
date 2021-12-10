const path = require("path");
const fs = require("fs");

/**
 *
 * @param {string} root - 目的のsqlファイルを含むディレクトリの絶対パス
 * @returns {(targetSQLFileName: string) => string} getSQLString
 */

const mysqlFileLoader = (root) => {
  /**
   *
   * @param {string} targetSQLFileName
   * @returns {string} sqlファイル内の文字列
   */
  const getSQLString = (targetSQLFileName) => {
    const sqlString = fs.readFileSync(path.join(root, targetSQLFileName), "utf-8");
    return sqlString;
  };

  return getSQLString;
};

module.exports = { mysqlFileLoader };
