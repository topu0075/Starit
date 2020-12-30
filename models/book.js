const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    price : {
      type: Number,
      trim: true,
    },
    date : {
        type: Date,
    }
  }
);

module.exports = mongoose.model("Book", bookSchema);