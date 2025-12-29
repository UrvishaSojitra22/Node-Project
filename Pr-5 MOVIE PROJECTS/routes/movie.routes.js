const express = require("express");

const {
  getAllMovies,
  showAddMoviePage,
  addMovie,
  deleteMovie,
  editMovie,
  updateMovie
} = require("../controller/Movie.controller");
const uploadSImage = require("../middelwer/uplodefile");

const routes = express.Router();

routes.get("/", getAllMovies);
routes.get("/add-Movie", showAddMoviePage);

routes.post("/add-Movie", uploadSImage.single("poster"), addMovie);
routes.get("/delete-Movie/:id", deleteMovie);
routes.get("/edit-Movie/:id", editMovie);
routes.post("/update-Movie/:id", uploadSImage.single("poster"), updateMovie);

module.exports = routes;
