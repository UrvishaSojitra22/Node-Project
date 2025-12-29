const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    
  },

  director: {
    type: String,
   
  },

  genre: {
    type: String   // Action, Drama, Comedy etc.
  },

  releaseYear: {
    type: Number
  },

  duration: {
    type: Number   // in minutes
  },

  language: {
    type: String   // Hindi / English / Gujarati
  },

  rating: {
    type: String   // IMDB rating
  },

  status: {
    type: String,  // Available / Not Available
    
  },
  poster: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Movie", MovieSchema);
