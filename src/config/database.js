const { Pool } = require("pg");
const path = require("path");
const dotEnv = require("dotenv");
const envPath = path.resolve(__dirname, "../../.env");

dotEnv.config({
  path: envPath,
});

const pool = new Pool({
  user: process.env.user,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  host: process.env.HOST,
});
pool.connect();

module.exports = pool;
