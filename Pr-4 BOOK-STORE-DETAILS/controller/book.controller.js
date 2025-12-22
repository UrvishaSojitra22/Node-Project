const Book = require("../model/book.model");

// Get all books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.render("index", { books });
};

// Add book
exports.addBook = async (req, res) => {
  await Book.create(req.body);
  res.redirect("/");
};

// Delete book
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

// Edit book page
exports.editBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("editBook", { book });
};

// Update book
exports.updateBook = async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

// Search by category
exports.searchByCategory = async (req, res) => {
  const books = await Book.find({ category: req.query.category });
  res.render("index", { books });
};
