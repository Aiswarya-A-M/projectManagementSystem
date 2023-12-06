const { Sequelize } = require("sequelize");
const path = require("path");
const dotEnv = require("dotenv");
const envPath = path.join(__dirname, "../../.env");

dotEnv.config({
  path: envPath,
});

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.user,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established successfully");
  })
  .catch((error) => {
    console.log("unable to connect", error);
  });

module.exports = sequelize;
