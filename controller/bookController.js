const Book = require("../models/book");

const validateID = require("../utils/validateID");

const getAllBook = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

// =========================================
const eachBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID) {
    res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }

  const book = await Book.findOne({ _id: id });

  res.status(200).json({ book });
};

// ===========================================
const createBook = (req, res) => {
  const { title, author, genre } = req.body;
  const book = Book.create(req.body);

  if (!title) {
    return res.status(400).json({ message: "Please provide a Title" });
  }

  if (!author) {
    return res.status(400).json({ message: "Please choose Author's Name" });
  }

  if (!genre) {
    return res.status(400).json({ message: "Please choose a Genre" });
  }
};

// =============================================
const editBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }

  const book = await Book.findOneAndUpdate({ _id: id }, { ...req.body });

  res.status(200).json({ message: "Book Updated Successfully" });
};

// =================================================
const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  res.status(200).json({ message: "Book Successfully Deleted" });
};

module.exports = { getAllBook, eachBook, createBook, editBook, deleteBook };
