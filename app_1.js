
function jump(){
    document.getElementById("character").id = "jumpedCharacter";
    setTimeout(reverse, 500);
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
setInterval(calculateDistance,20);
function calculateDistance(){
    var characterPos = document.getElementById("character").offsetLeft;
    var trapPos = document.getElementById("trap").offsetLeft;
    let distance = trapPos-characterPos;
    console.log(distance);
    if((0<distance && distance<50) || (-200<distance && distance<0)){
        const score = upto-7;
        document.getElementById("playingMusic").setAttribute("src","musics/TunePocket-Retro-Fun-Energetic-Rock-Logo-Preview.mp3");
        alert("you lose!!!   " + "\n" +"your score : "+score);
        location.reload();
    }
}