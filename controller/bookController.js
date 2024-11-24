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

  if (!validateID(id)) {
    res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }

  try {
    const book = await Book.findOne({ _id: id });
    if (!book) {
      res.status(200).json({ book });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching the book", error });
  }
};

// ===========================================
const createBook = async (req, res) => {
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

  try {
    const book = await Book.create(req.body);
    res.status(201).json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating book", error });
  }
};

// =============================================
const editBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }

  res.status(200).json({ message: "Book Updated Successfully" });

  try {
    const book = await Book.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book Updated Successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

// =================================================
const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }

  try {
    const book = await Book.findOneAndDelete({ _id: id });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book Successfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};

module.exports = { getAllBook, eachBook, createBook, editBook, deleteBook };
