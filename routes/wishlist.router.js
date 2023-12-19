const express = require("express");
const router = express.Router();
const verifyuser = require("../middleware/verifyuser")

const wishlistController = require("../controllers/wishlistController");
const  {createWishlist,deleteWishlist,getWishlist} = wishlistController;

router.route("/").post(verifyuser, createWishlist);
router.route("/:id").delete(verifyuser, deleteWishlist);
router.route("/").get(verifyuser, getWishlist);

module.exports = router; 