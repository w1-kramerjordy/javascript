$(document).ready(function () {

    //alle antwoorden verbergen
    $('.antwoord').hide();

    //alle vragen verbergen
    $('.quiz li').hide();

    //de eerste vraag tonen
    $('.quiz li:first').show();

    var vraagteller = 0;
    var score = 0;

    //may the games begin

    $('#volgende').click(function () {

        //alert(1);

        //opvragen antwoord
        var $antwoord = $('#vraag' + vraagteller);

        //controleren of antwoord ingevuld is
        if ($antwoord.val() == '') {
            $('#status').html('Je moet een antwoord opgeven!');
            return;
        }

        //ophalen goede antwoord
        var $goedeantwoord = $antwoord.prev();


        //controleren of het antwoord goed is
        if ($antwoord.val() == $goedeantwoord.html()) {

            //score ophogen en tonen
            score += 10;
            $('#score').html(score);

            //volgende vraag tonen en deze verbergen


        }

    });
});