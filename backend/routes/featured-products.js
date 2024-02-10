const { getFeaturedProducts } = require("../controllers/featured-products");

const router = require("express").Router();

router.get("/", getFeaturedProducts);

module.exports = router;
