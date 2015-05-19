<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <script src="411.js"></script>
        <link rel="stylesheet" type="text/css" href="411.css" />
        <title></title>
    </head>
    <body>
        <?php 
             date_default_timezone_set('Europe/Amsterdam');
             echo date('d-m-Y'); 
             ?>
            <br>
            <br>
        <form>
            uw opleiding:
             <br>
               <select name="opleidingen" id="opleiding" form="carform">
                   <option value="MBO">MBO</option>
                   <option value="HBO">HBO</option>
               </select>
            <br>
            de duur van de opleiding die u hebt gevolgd: <br>
                <input type="number" value="ervaring" id="ervaring">
            <br>
            <br>
                <button onclick="getSalaris()" name="submit">verzenden</button>
        </form>
    </body>
</html>
