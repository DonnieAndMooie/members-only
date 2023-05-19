const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/UserSchema");

exports.login_post = [
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .escape(),

  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  }),
];
