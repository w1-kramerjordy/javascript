
function controleren() 
{
        
        var getalElement = document.getElementById('opleiding');
        var opleiding = getalElement.value;

    if (opleiding == 'MBO') {
        berekenMBO();
    }
    else {
        berekenHBO();
    }
}
    
function berekenHBO()
{
        var getalElement = document.getElementById('ervaring');
        var ervaring = getalElement.value;

      if (ervaring <= 0.5) {
            alert('u bent een junior programmeur.');
        }
        else if (ervaring <= 2) {
            alert('u bent een medior programmeur.');
        }
        else {
            alert('u bent een senior programmeur.');
        }
}




    function berekenMBO() {

        var getalElement = document.getElementById('ervaring');
        var ervaring = getalElement.value;


        if (ervaring <= 1) {
            alert('u bent een junior programmeur.');
        }
        else if (ervaring <= 3) {
            alert('u bent een medior programmeur.');
        }
        else {
            alert('u bent een senior programmeur.');
        }

    }
