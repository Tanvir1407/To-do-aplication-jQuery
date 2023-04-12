$(document).ready(function () {
    // create Dom
    $("#input__field").keypress(function (e) {
        let text = $("#input__field").val();
        if (e.which == 13 && text.length > 0) {
            $('ul').append('<li>'+ text +'<div class="button_box"><span><img class="check" src="/images/check.png" alt="check"></span><span> <img class="delete" src="/images/delete.png" alt="delete"></span> </div>' + '</li>');
            $("#input__field").val('')
        }
    })
    $("#submit").click(function () {
        let text = $("#input__field").val();
        if (text.length > 0) {
            $('ul').append('<li>' + text + '<div class="button_box"><span><img class="check" src="/images/check.png" alt="check"></span><span> <img class="delete" src="/images/delete.png" alt="delete"></span> </div>' + '</li>');
            $("#input__field").val('')
        }    
    })
    // delete Dom
    $("ul").on('click', '.delete', function () {
        $(this).parents("li").remove();
    })
    $("ul").on('click', '.check', function () {
        $(this).parents("li").css({ 'text-decoration': 'line-through', 'backgroundColor':'#90EE90'})
    })
})