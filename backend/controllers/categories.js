const db = require("../db");

const getCategories = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM categories");
    if (result.rows.length === 0) {
      res.status(204).end();
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error("Error retrieving categories:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getCategories,
};
