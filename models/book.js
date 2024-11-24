const mongoose = require("mongoose");

const schema = mongoose.Schema;

const bookSchema = new schema({
  title: String,
  author: String,
  genre: String,
});

module.exports = mongoose.model("book", bookSchema);
