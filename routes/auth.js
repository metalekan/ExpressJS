const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name === "lekan" || name === "john") {
    return res.status(200).send(`Welcome to the UK ${name.toUpperCase()}`);
  }
  res.status(401).send("Make the relocation money.");
});

module.exports = router

