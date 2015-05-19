function getSalaris(opleiding, ervaring) {
    /* ervaring */
    var getalElement = document.getElementById('ervaring');
    var ervaring = getalElement.value;
    /* opleiding */
    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;

    /* het MBO gedeelte */

    if (opleiding == 'MBO') {
        if (ervaring < 3)
        {
        alert('u hebt minder dan 3 jaar ervaring op een MBO opleiding en krijgt 1800 euro per maand.');
        }
        else if (ervaring > 7) 
        {
        alert('u hebt meer dan 7 jaar ervaring op een MBO opleiding en krijgt 2200 euro per maand.');
        }
        else 
        {
        alert('u hebt binnen de 3 en de 7 jaar ervaring op een MBO opleiding en krijgt 2000 euro per maand.');
        }
    }
    
   

    /* het HBO gedeelte */

    else if (opleiding == 'HBO') {

        if (ervaring < 2)
        {
             alert('u hebt minder dan 2 jaar ervaring op een HBO opleiding en krijgt 2000 euro per maand.');
        }
        
        else if (ervaring > 6) {
        alert('u hebt meer dan 6 jaar ervaring op een HBO opleiding en krijgt 2400 euro per maand.');
        }

        else {
        alert('u hebt binnen de 2 en de 6 jaar ervaring op een HBO opleiding en krijgt 2200 euro per maand.');
    }
    }
    
}
       