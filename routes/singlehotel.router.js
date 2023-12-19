const express = require("express");
const router = express.Router();

const signleHotelHandler = require("../controllers/singlehotelController");

router.route("/:id").get(signleHotelHandler);

module.exports = router;