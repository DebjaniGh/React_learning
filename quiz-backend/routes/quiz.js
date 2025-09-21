const express = require("express");
const router = express.Router();
const quizQuestions = require("../data/questions.json");

router.get("/", (req, res) => {
  res.json(quizQuestions);
});

module.exports = router;
