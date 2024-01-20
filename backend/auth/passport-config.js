const LocalStrategy = require("passport-local").Strategy;
const db = require("../db");
const bcrypt = require("bcrypt");


function initializePassport(passport) {
  const authenticateUser = async (email, password, done) => {
    try {
      // Check if the user with the given email already exists
      const existingUser = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      if (existingUser.rows.length === 0) {
        // User with the same email already exists
        return done(null, false, { message: "No user with this email." });
      }

      // Check if the password is correct
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.rows[0].hashed_password
      );

      if (!passwordMatch) {
        // Passwords don't match

        return done(null, false, { message: "Wrong password." });
      }

      // Authentication successful
      return done(null, existingUser.rows[0]);
    } catch (err) {
      // Error in authentication process
      
      return done(err);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  // Serialize user
  passport.serializeUser((user, done) => {
   
    done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);

      done(null, user.rows[0]);
    } catch (err) {
      done(err);
    }
  });
}

module.exports =  initializePassport;
