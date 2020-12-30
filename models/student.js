const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    mobile: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength:14
    },
  }
);

module.exports = mongoose.model("Students", studentSchema);