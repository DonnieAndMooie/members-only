const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/UserSchema");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.redirect("/sign-up");
});

router.get("/sign-up", (req, res, next) => {
  res.render("sign-up", { title: "Sign up" });
});

router.post("/sign-up", [
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name is required"),
  body("last_name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Last name is required"),
  body("email")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .escape()
    .withMessage("Password must be at least 6 character long"),

  async (req, res, next) => {
    console.log(req.body.email);
    const errors = validationResult(req);

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) throw err;
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
        member: false,
      });

      if (errors.isEmpty()) {
        await newUser.save();
        res.render("/login");
      } else {
        console.log(errors.array());
        res.render("/sign-up", { title: "Sign Up", user: newUser, errors: errors.array() });
      }
    });
  },
]);

module.exports = router;
