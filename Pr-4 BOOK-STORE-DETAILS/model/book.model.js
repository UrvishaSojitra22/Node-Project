const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String   // dropdown
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  publisher: {
    type: String
  },
  publishYear: {
    type: Number
  },
  language: {
    type: String   // dropdown
  },
  isbn: {
    type: String
  },
  status: {
    type: String   // Available / Out of Stock
  }
});

module.exports = mongoose.model("book", bookSchema);
