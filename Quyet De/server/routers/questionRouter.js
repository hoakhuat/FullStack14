const express = require('express');
const QuestionRouter = express.Router();
const QuestionModel = require('../models/questionModel');



//localhost:6969/question/
QuestionRouter.get('/', (req, res) => {
    QuestionModel.countDocuments((err, length) => {
      if (err) console.error(err)
      else {
        let randomNum = Math.floor(Math.random() * length);
        QuestionModel
          .findOne({})
          .skip(randomNum)
          .exec((err, questionFound) => {
            if (err) console.error(err)
            else res.send({ message: 'Success', question: questionFound });
          });
      }
    });
  });

  QuestionRouter.get('/:questionId', (req, res) => {
    let questionId = req.params.questionId;
    QuestionModel.findOne({ _id: questionId }, (err, questionFound) => {
      if (err) console.log(err)
      else if (questionFound)
        res.send({ message: "Success!", question: questionFound });
    })
  });

  module.exports = QuestionRouter;


