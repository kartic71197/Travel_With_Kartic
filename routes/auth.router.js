const express = require('express');

const sigupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register").post(sigupHandler);
router.route("/login").get(loginHandler);

module.exports = router;
