const express = require("express");
const router = express.Router();
const controllers = require("../controllers/products");

router.route("/").get(controllers.getALLProducts);
router.route("/static").get(controllers.getAllProductsStatic);

module.exports = router;
