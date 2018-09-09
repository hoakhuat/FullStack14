const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const QuestionModel = require('./models/questionModel');
const QuestionRouter = require('./routers/questionRouter');

let app = express();
mongoose.connect('mongodb://hoakhuat:hoa123456@ds237832.mlab.com:37832/quyet_de', (err) => {
  if (err) console.log('DB error')
  else console.log("DB connect successfully.")
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.use('/question', QuestionRouter);

app.post('/ask', (req, res) => {
  const newQuestion = {
    content: req.body.question,
  }
  QuestionModel.create(newQuestion, (err, questionCreated) => {
    if (err) console.log(err)
    else res.redirect('http://localhost:8080/');
  });
});

// app.get('/question', (req, res) => {
//   QuestionModel.countDocuments((err, length) => {
//     if (err) console.error(err)
//     else {
//       let randomNum = Math.floor(Math.random() * length);
//       QuestionModel
//         .findOne({})
//         .skip(randomNum)
//         .exec((err, questionFound) => {
//           if (err) console.error(err)
//           else res.send({ message: 'Success', question: questionFound });
//         });
//     }
//   });
// });

// app.get('/question/:questionId', (req, res) => {
//   let questionId = req.params.questionId;
//   QuestionModel.findOne({ _id: questionId }, (err, questionFound) => {
//     if (err) console.log(err)
//     else if (questionFound)
//       res.send({ message: "Success!", question: questionFound });
//   })
// });

app.put('/answer', (req, res) => {
  // const answer = req.body.answer;
  // const questionId = req.body.questionId;
  const { answer, questionId } = req.body;

  // QuestionModel.findOne({ _id: questionId })
  //   .exec((err, questionFound) => {
  //     if (err) console.log(err)
  //     else if (questionFound) {
  //       questionFound[answer]++;
  //       questionFound.save((err) => {
  //         if (err) console.error(err)
  //         else res.send({ message: "Success!", question: questionFound });
  //       });
  //     }
  //   });

  // QuestionModel.findByIdAndUpdate(
  //   questionId,
  //   { $inc: { [answer]: 1 } },
  //   { new: true },
  //   (err, questionUpdated) => {
  //     if (err) console.log(err)
  //     else res.send({ message: 'success', question: questionUpdated })
  //   });

  //tối ưu hơn khi dùng với schema phức tạp
  QuestionModel.findById(questionId, (err, questionFound) => {
    if (err) console.log(err)
    else if (questionFound) {
      questionFound[answer]++;
      questionFound.save((err) => {
        if (err) console.error(err)
        else res.send({ message: "Success!", question: questionFound });
      });
    } else res.send({ message: 'Not found', question: null })
  })
});

app.listen(6969, (err) => {
  if (err) console.log(err)
  else console.log("Server is listening at port 6969!");
});