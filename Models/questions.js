const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: String,
  alternatives: [String],
  correct: String,
});

module.exports = mongoose.model("Questions", questionSchema);
