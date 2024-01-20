const session = require("express-session");
const PgSession = require("connect-pg-simple")(session);
const pool = require("../db/index");

require("dotenv").config();

function configureSession() {
  const sessionConfig = {
    store: new PgSession({
      pool,
      tableName: "user_sessions",
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 86400000, secure: false },
    resave: false,
    saveUninitialized: false,
  };

  return session(sessionConfig);
}

module.exports = configureSession;
