const express = require("express");
const { findById } = require("../Models/questions");
const Question = require("../Models/questions");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const question = new Question({
    question: req.body.question,
    alt1: req.body.alt1,
    alt2: req.body.alt2,
    alt3: req.body.alt3,
    alt4: req.body.alt4,
  });

  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:questionId", async (req, res) => {
  try {
    const question = await Question.remove({ _id: req.params.questionId });
    res.json(question);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
