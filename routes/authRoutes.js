const express = require("express");
const {
  register,
  login,
  logout,
  verifyUser,
} = require("../controllers/authcontroller");

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/verify", verifyUser);

module.exports = authRoutes;
