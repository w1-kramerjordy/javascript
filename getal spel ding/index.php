<?php

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link href="index.css" rel="stylesheet">
        <script src="index.js"></script>
        <title></title>
    </head>
    <body>
        <div class="kader">
            <div class="hogerlager">
                <h1>HOGER / LAGER</h1>
            </div>
            <br />
            
            <div class="getaltextbox">
                <p>Vul hier uw getal in:</p>
                <input type="text" name="getalbox" id="getal1" style="width: 450px; height: 30px; background-color: #1868e6;">
            </div>

            <div class="button">
                <button type="button" onclick="truefalse();" style ="width: 150px; height: 40px; background-color: #1868e6; border-radius: 25px;">Controleer getal!</button>
            </div>

            <div class="uitkomsttextbox">
                <input type="text" name="uitkomstbox" style="width: 450px; height: 30px; background-color: #1868e6;">
            </div>
            <div class="score">
                <h1>SCORE</h1> <h2></h2>
            </div>
            <div class="footer">
                <p>Dit spel is gemaakt door Jordy Kramer</p>
            </div>
        </div>
    </body>
</html>
