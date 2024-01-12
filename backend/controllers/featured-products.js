const db = require("../db");

const getFeaturedProducts = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const offset = (page - 1) * pageSize;
    const result = await db.query(
      "SELECT featured_products.product_id, products.*, categories.category_name FROM featured_products JOIN products On products.id = featured_products.product_id JOIN categories ON categories.id = featured_products.product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    if (result.rows.length === 0) {
      res.status(204).end();
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error("Error retrieving products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getFeaturedProducts,
};
