// auth.js
const express = require("express");
const passport = require("passport");
const db = require("../db");
const router = express.Router();
const bcrypt = require("bcrypt");

// Login route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      // Custom response for failed authentication
      return res.status(401).json({ message: "Authentication failed", info });
    }

    // If authentication is successful, manually log in the user
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      // Send a custom success response
      return res.json({ message: "Login successful"});
    });
  })(req, res, next);
});

router.post("/register", async (req, res) => {
  try {
    // Check if the user with the given email already exists
    const existingUser = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [req.body.email]
    );

    if (existingUser.length > 0) {
      // User with the same email already exists
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a user object
    const user = {
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    };
    // Insert the new user
    const result = await db.query(
      "INSERT INTO users (username, hashed_password, email) VALUES ($1, $2, $3)",
      [user.username, user.password, user.email]
    );

    // Check the number of rows affected
    const rowCount = result.rowCount;

    // You can use rowCount to determine if the insertion was successful
    if (rowCount > 0) {
      // Insertion successful
      res.status(201).send({ message: "User created" });
    }
  } catch (err) {
    // Provide more information in the error response
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
});

// Logout route
router.delete("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout error" });
    }
    res.json({ message: "Logout successful" });
  });
});
module.exports = router;
