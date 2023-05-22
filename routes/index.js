const express = require("express");

const router = express.Router();
const signUpController = require("../controllers/signUpController");
const loginController = require("../controllers/loginController");
const messageController = require("../controllers/messageController");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.redirect("/login");
});

router.get("/sign-up", (req, res, next) => {
  res.render("sign-up", { title: "Sign up" });
});

router.post("/sign-up", signUpController.sign_up_post);

router.get("/join", (req, res, next) => {
  res.render("join");
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Log In" });
});

router.post("/login", loginController.login_post);

router.get("/dashboard", (req, res, next) => {
  res.render("dashboard", { title: "Home" });
});

router.post("/join", loginController.join_post);

router.get("/new-message", (req, res, next) => {
  res.render("message-form", { title: "New Message" });
});

router.post("/new-message", messageController.new_message_post);

module.exports = router;
