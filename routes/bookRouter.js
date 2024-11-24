const express = require("express");

const {
  getAllBook,
  eachBook,
  createBook,
  editBook,
  deleteBook,
} = require("../controller/bookController");

const router = express.Router();

router.get("/", getAllBook);

router.get("/:id", eachBook);

router.post("/create", createBook);

router.put("/:id", editBook);

router.delete("/:id", deleteBook);

module.exports = router;
