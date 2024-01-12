const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// logging middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Router for products, all routes start with /api/products
app.use("/api/products", require("./routes/products"));

// Router for featured products, all routes start with /api/featured-products
app.use("/api/featured-products", require("./routes/featured-products"));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello, Ecommerce API!");
});

module.exports = app;
