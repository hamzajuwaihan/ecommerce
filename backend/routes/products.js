const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

router.param("id", (req, res, next, id) => {
  const receivedId = parseInt(id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  req.id = id;
  next();
});

router.get("/", productsController.getAllProducts);

router.post("/", productsController.postNewProduct);

router.get("/:id", productsController.getSingleProduct);

module.exports = router;
