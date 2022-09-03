
function jump(){
    document.getElementById("character").id = "jumpedCharacter";
    setTimeout(reverse, 2000);
}
function reverse(){
    document.getElementById("jumpedCharacter").id = "character";
}

var upto=0;
var score= document.getElementById("scn");
setInterval(up,350)
function up(){
    score.innerHTML=upto;
    upto+=7;
}

