$(document).ready(function () {
    $('#opdrachten li').click(function () {
        $(this).toggleClass('gedaan');
        //.fadeOut(10000);
    });

    //color change met hover
    $('#lijst li').mouseenter(function () {
        $(this).addClass('red');
    });
    $('#lijst li').mouseleave(function () {
        $(this).removeClass('red');
    });

    //klikken op stemmen +1 en dubbelclick -1
    $('#lijst span').click(function () {
        $(this).text(function (a, b) {
            return Number(b) + 1;
        });
    });
    $('#lijst span').dblclick(function () {
        $(this).text(function (a, b) {
            return Number(b) - 3;
        });
    });

    //buttonclicks
    $('#btn1').click(function () {
        $('#lijst li:nth-child(1)').remove()
    });
    $('#btn2').click(function () {
        $('ul').append($('ul').find('li').get().reverse());
    });

    //toevoegen serie & controleren
    $('#btn3').click(function () {
        var val = $('#inputding').val();
        $('<li>' + val + '</li>').appendTo('#lijst');
    });

    //bij indrukken van een letter highlight de series die ermee beginnen
    $('#lijst li').keypress(function () {

    });

})