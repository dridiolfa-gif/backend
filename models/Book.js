const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "Novel",
        "Science-Fiction",
        "Fantasy",
        "Thriller",
        "Biography",
        "History",
        "Other",
      ],
      default: "Other",
    },
    description: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    coverImage: {
      type: String,
      default: "https://via.placeholder.com/150x220?text=Book",
    },
    year: {
      type: Number,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Book", bookSchema);
