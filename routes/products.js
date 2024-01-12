const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

router.delete("/delete-product/:id", productsController.deleteProduct);

router.put("/update-product/:id", productsController.updateProduct);

router.post("/add-product", productsController.addProduct);

router.get("/products/:id", productsController.getAllProducts);

module.exports = router;