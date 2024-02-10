const express = require("express");
const app = express();
const morgan = require("morgan");
const initializePassport = require("./auth/passport-config");
const passport = require("passport");
const session = require("./auth/session-config");
require("dotenv").config();
const cors = require("cors");
// logging middleware
app.use(morgan("dev"));

// Enable CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure passport-local to use the local strategy
initializePassport(passport);

// configure express-session middleware and passport middleware
app.use(session());
app.use(passport.initialize());
app.use(passport.session());

// Router for authentication
app.use("/api/auth", require("./auth/auth.js"));

// Router for products
app.use("/api/products", require("./routes/products"));

// Router for featured products, all routes start with /api/featured-products
app.use("/api/featured-products", require("./routes/featured-products"));

// Router for categories
app.use("/api/categories", require("./routes/categories"));

// Basic route for testing
app.get("/", (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.user);
  console.log(req.session);
  res.send("Hello, Ecommerce API!");
});

module.exports = app;
