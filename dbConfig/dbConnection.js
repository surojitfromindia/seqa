const { Sequelize } = require("sequelize");

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mysql",
  logging: console.log,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
})();
module.exports = sequelize;
