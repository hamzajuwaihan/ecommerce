const { getCategories } = require("../controllers/categories");

const router = require("express").Router();

router.get("/", getCategories);

module.exports = router;
