const express = require("express");
const {
  getAllBooks,
  addBook,
  deleteBook,
  editBook,
  updateBook,
  searchByCategory
} = require("../controller/book.controller");

const routes = express.Router();

routes.get("/", getAllBooks);
routes.post("/add-book", addBook);
routes.get("/delete-book/:id", deleteBook);
routes.get("/edit-book/:id", editBook);
routes.post("/update-book/:id", updateBook);
routes.get("/search", searchByCategory);

module.exports = routes;
