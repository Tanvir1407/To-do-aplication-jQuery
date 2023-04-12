$(document).ready(function () {
    $("#input__field").keypress(function (e) {
        let text = $("#input__field").val();

        //create DOM
        let list = document.createElement('li');
        list.innerText = text

        let Div = document.createElement('div');
        Div.classList.add("button_box");

        let spanRight = document.createElement('span');
        let rightImg = document.createElement('img');
        rightImg.src = "/images/check.png";
        spanRight.appendChild(rightImg)

        let spanDelete = document.createElement('span');
        let deleteImg = document.createElement('img');
        deleteImg.src = "/images/delete.png";
        spanDelete.appendChild(deleteImg)

        Div.appendChild(spanRight);
        Div.appendChild(spanDelete);

        list.appendChild(Div)
        //

        if (e.which == 13) {
            $('ul').append(list);
            $("#input__field").val('')
        }
    })
    
})