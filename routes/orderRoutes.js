const express = require("express");
const {
  createRazorpayOrder,
  verifyPayment,
} = require("../controllers/orderController");
const isAuth = require("../middleware/authMiddlewares");

const orderRoutes = express.Router();

orderRoutes.post("/create-razorpay-order", isAuth, createRazorpayOrder);
orderRoutes.post("/verify-payment", isAuth, verifyPayment);

module.exports = orderRoutes;
