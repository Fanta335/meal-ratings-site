module.exports = {
  HOST: process.env.MYSQL_HOST || "127.0.0.1",
  PORT: process.env.MYSQL_PORT || "3306",
  USERNAME: process.env.MYSQL_USERNAME || "admin",
  PASSWORD: process.env.MYSQL_PASSWORD || "f4n+45y",
  DATABASE: process.env.MYSQL_DATABASE || "meal_ratings_site",
  CONNECTION_LIMIT: process.env.CONNECTION_LIMIT ? parseInt(process.env.CONNECTION_LIMIT) : 10,
  QUEUE_LIMIT: process.env.QUEUE_LIMIT ? parseInt(process.env.QUEUE_LIMIT) : 0,
};
