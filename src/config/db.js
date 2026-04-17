const {Pool} = require("pg");
require("dotenv").config();

 const pool = new Pool({
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD), // 🔥 FORCE STRING
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),         // 🔥 ensure number
  database: process.env.DB_NAME,
});

module.exports = pool;