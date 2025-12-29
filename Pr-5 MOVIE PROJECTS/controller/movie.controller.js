const Movie = require("../model/movie.model");
const fs = require("fs");
const path = require("path");

// ================= SHOW ALL MOVIES =================
exports.getAllMovies = async (req, res) => {
  try {
    const Movies = await Movie.find();
    return res.render("Home", { Movies });
  } catch (error) {
    console.log(error);
    res.send("Error loading movies");
  }
};

// ================= ADD MOVIE PAGE =================
exports.showAddMoviePage = (req, res) => {
  return res.render("add-Movie");
};

// ================= ADD MOVIE (WITH IMAGE) =================
exports.addMovie = async (req, res) => {
  try {
    let poster = "";

    if (req.file) {
      poster = `/uploads/${req.file.filename}`;
    }

    await Movie.create({
      ...req.body,
      poster: poster
    });

    return res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Error adding movie");
  }
};

// ================= DELETE MOVIE =================
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    // delete poster image if exists
    if (movie?.poster) {
      const imgPath = path.join(
        __dirname,
        "..",
        "uploads",
        path.basename(movie.poster)
      );

      try {
        fs.unlinkSync(imgPath);
      } catch (err) {
        console.log("Image already deleted");
      }
    }

    await Movie.findByIdAndDelete(req.params.id);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Delete error");
  }
};

// ================= EDIT MOVIE PAGE =================
exports.editMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("edit-Movie", { movie });

  } catch (error) {
    console.log(error);
    res.send("Edit error");
  }
};

// ================= UPDATE MOVIE (WITH IMAGE) =================
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.send("Movie not found");

    let poster = movie.poster;

    if (req.file) {
      // delete old image
      if (movie.poster) {
        const oldPath = path.join(
          __dirname,
          "..",
          "uploads",
          path.basename(movie.poster)
        );

        try {
          fs.unlinkSync(oldPath);
        } catch (err) {
          console.log("Old image missing");
        }
      }

      poster = `/uploads/${req.file.filename}`;
    }

    await Movie.findByIdAndUpdate(req.params.id, {
      ...req.body,
      poster
    });

    return res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Update error");
  }
};
