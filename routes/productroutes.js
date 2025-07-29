const express = require("express");
const {
  getAllProducts,
  getAllProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const isAuth = require("../middleware/authMiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);
productRoutes.get("/products/:id", getAllProductsById);
productRoutes.post("/products", createProduct);
productRoutes.put("/products/:id", updateProduct);
productRoutes.delete("/products/:id", deleteProduct);

module.exports = productRoutes;
