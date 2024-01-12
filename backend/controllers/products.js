const db = require("../db");

const getAllProducts = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10; // Adjust the page size as needed
    const offset = (page - 1) * pageSize;
    const result = await db.query("SELECT products.*, categories.category_name, product_images.image_url FROM products JOIN categories ON categories.id = products.id JOIN product_images ON products.id = product_images.id LIMIT $1 OFFSET $2", [
      pageSize,
      offset,
    ]);

    if (result.rows.length === 0) {
      // If there are no products, respond with a 204 No Content status
      res.status(204).end();
    } else {
      // If there are products, respond with the list of products
      res.json(result.rows);
    }
  } catch (err) {
    console.error("Error retrieving products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const postNewProduct = (req, res) => {
  // user should be logged in to create a new product
  // Respond with a success message
  res.json({ message: "Create new product route" });
};

const getSingleProduct = async (req, res) => {
  try {
    // Respond with a single product object
    const result = await db.query(
      "SELECT products.*, category_name FROM products JOIN categories ON products.category_id = categories.id WHERE products.id = $1",
      [req.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  postNewProduct,
  getSingleProduct,
};
