$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:9999/question',
    method: 'GET',
    dataType: 'JSON',
    success: function (data) {
      $('#questionContent').text(data.question.content);
      $('.answer').attr("data-id", data.question._id);
    },
    error: function () {
      console.log("fail!");
    }
  });

  $('.answer').on('click', function (e) {
    let answer = $(e.target).attr('data-answer');
    let questionId = $(e.target).attr('data-id');
    $.ajax({
      url: 'http://localhost:9999/answer',
      method: 'PUT',
      data: {
        // answer: answer,
        answer,
        questionId
      },
      success: function (data) {
        if (data.question) {
          let totalVote = data.question.yes + data.question.no;
          $('#vote').text(totalVote);
          totalVote = totalVote == 0 ? 1 : totalVote;
          let yes = ((data.question.yes / totalVote) * 100).toFixed(2);
          let no = ((data.question.no / totalVote) * 100).toFixed(2);
          $('#yes').attr('style', `width:${yes}%`);
          $('#no').attr('style', `width:${no}%`);
          $('#voteYes').text(yes);
          $('#voteNo').text(no);
          $('.questionInfo').css('display', 'block');
          $('.answers').css('display', 'none');
        }
      },
      error: function (error) {
        console.log(error);
      }
    })
  });

  $('#viewQuestionInfo').on('click', function (e) {
    e.preventDefault();
    let questionId = $('.answer:first-child').attr('data-id');
    $.ajax({
      url: `http://localhost:9999/question/${questionId}`,
      method: 'GET',
      success: function (data) {
        if (data.question) {
          let totalVote = data.question.yes + data.question.no;
          $('#vote').text(totalVote);
          totalVote = totalVote == 0 ? 1 : totalVote;
          let yes = ((data.question.yes / totalVote) * 100).toFixed(2);
          let no = ((data.question.no / totalVote) * 100).toFixed(2);
          $('#yes').attr('style', `width:${yes}%`);
          $('#no').attr('style', `width:${no}%`);
          $('#voteYes').text(yes);
          $('#voteNo').text(no);
          $('.questionInfo').css('display', 'block');
          $('.answers').css('display', 'none');
        }
      },
      error: function (error) {
        console.log(error);
      }
    })
  });
});