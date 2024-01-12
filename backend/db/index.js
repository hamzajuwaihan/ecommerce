// Load environment variables from .env file
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports = { query };
