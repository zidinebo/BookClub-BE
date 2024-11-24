const notFound = (req, res, next) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
