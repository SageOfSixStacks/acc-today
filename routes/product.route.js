const express = require("express");
const {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct} = require("../controllers/product.controller")


const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;