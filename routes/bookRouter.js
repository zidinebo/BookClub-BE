const express = require("express");

const {
  getAllBook,
  eachBook,
  createBook,
  editBook,
  deleteBook,
} = require("../controller/bookController");

const router = express.Router();

router.get("/api/book/", getAllBook);

router.get("/api/book/:id", eachBook);

router.post("/api/book/create", createBook);

router.put("/api/book/:id", editBook);

router.delete("/api/book/:id", deleteBook);

module.exports = router;
