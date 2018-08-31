$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:6969/question',
        method: 'GET',
        success: function (data) {
            // console.log("success", data);
            $('h1').text(data.question);
            $('.answer').attr('data-id', data.id)
        },
        error: function () {
            console.log("error!");
        }
    });

    $('.answer').on('click', function (event) {
        let answer = $(event.target).attr('data-answer');
        let questionId = $(event.target).attr('data-id');
        // console.log(answer, questionId);
        $.ajax({
            url: 'http://localhost:6969/answer',
            method: 'PUT',
            success: function (data) {
                // let data = JSON.parse(fileData);
                let yes = data[questionId - 1].yes;
                let no = data[questionId - 1].no;
                if (answer == 'yes') {
                    yes++;
                    console.log('yes' + yes);
                } else {
                    no++;
                    console.log('no' + no);
                }

                $.post(
                    'http://localhost:6969/answer',
                    {
                        id: questionId,
                        yes: yes,
                        no: no
                    },
                    function () {
                        console.log("success");
                    },
                    'JSON'
                )
            },
            error: function () {
                console.log("error!");
            }
        });
    });

    $.ajax({
        url: 'http://localhost:6969/answer',
        method: 'POST',
        dataType: 'JSON',
        success: function (data) {
            $('h1').text(data.question);
            $('h3').attr('data-id', data.id)
        },
        error: function () {
            console.log("error!");
        }
    });
});

