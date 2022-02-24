const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: String,
  alt1: String,
  alt2: String,
  alt3: String,
  alt4: String,
});

module.exports = mongoose.model("Questions", questionSchema);
