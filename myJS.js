var interval = [2, 2, 2, 3, 2, 2, 3, 2, 2, 4, 2, 2, 2, 3, 2, 3, 2, 2, 4, 2, 2, 2, 4, 2, 2, 3, 3, 2, 3, 3, 2, 2, 2, 2, 4, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 2, 2, 3, 2];
var i = -(1);
var myVar;
var presentForSec;
var hideStim;

$(document).ready(startHere);

function startHere() {
    
    show();
}

function show() {
    i+=1;
    $('#head').show();
    clearInterval(presentForSec);
    hideStim = setInterval(hide, 1000 );
    
}

function hide() {
    $('#head').hide();
    clearInterval(hideStim);
    presentForSec = setInterval(show,  (1000*interval[i]));
}


function marking() {
    $('#result').html(Date.now());
}