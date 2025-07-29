const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
