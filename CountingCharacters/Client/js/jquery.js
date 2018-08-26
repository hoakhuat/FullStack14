
$(document).ready(function(){
    $('#question').on('input', function () {
        $('#count').html(200 - $('#question').val().length);
    });
});

