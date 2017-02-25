// laiko nustatymas

var start = new Date().getTime();

//parenkama randomColor

function getRandomColor() {

    var letters = '0123456789ABCDEFH'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;

}
// figuros nustatymas
//math.random funkcija

function atsirandaShape() {

    var top = Math.random() * 300;
    var left = Math.random() * 700;
    var width = (Math.random() * 100) + 100;

    // figuros   

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";

    } else {

        document.getElementById("shape").style.borderRadius = "0";

    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    // atsiranda po paspaudimo ir vel skaiciuoja laika is naujo

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}

function poToAtsiranda() {

    // atsiranda po random laiko, bet ki 2 sec

    setTimeout(atsirandaShape, Math.random() * 2000);

}

// onclick funkcija, kai paspaudi ant figuros 

poToAtsiranda();

document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display = "none";

    // laiko apskaičiavimas, per kiek laiko paspaudi figura

    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;

    // parodo laika

    document.getElementById("timeTaken").innerHTML = timeTaken + " s";

    poToAtsiranda();

}