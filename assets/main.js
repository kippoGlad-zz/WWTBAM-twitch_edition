//load audio

var musicTheme = new Audio("1.mp3");

var correct = new Audio("correct answer.mp3");
var wrong = new Audio("wrong answer.mp3");
var finalAnswer = new Audio("final answer.mp3");

//set volume

musicTheme.volume = 0.2;
correct.volume = 0.3;
wrong.volume = 0.3;
finalAnswer.volume = 0.3;

musicTheme.loop = true;
// sleep function

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//var for colors

const zolty = "linear-gradient(to left, rgb(255, 233, 32), #be9200)";
const czerwony = "linear-gradient(to left, rgb(255, 72, 72), #d10000)";
const niebieski = "linear-gradient(to left, rgb(0, 57, 203), #0016c1, #0016c1, rgb(0, 57, 203))";
const zielony = "linear-gradient(to left, rgb(35, 220, 74), #008f00)";

var sprawdz = 1; 

//ga

async function good(goodAnswer) {
    if (sprawdz == 1) {
        sprawdz = sprawdz - 1;
        for (i=0;i<3;i++) {
            while (musicTheme.volume = 0) {
                await sleep(1000);
                musicTheme.volume = musicTheme.volume - 0.001;
            }
            finalAnswer.play();
            document.getElementById(goodAnswer).style.backgroundImage = zolty;
            await sleep(900);
            console.log('niebieski');
            document.getElementById(goodAnswer).style.backgroundImage = niebieski;
            await sleep(900);
        }
            finalAnswer.volume = 0;
            correct.play();
            document.getElementById(goodAnswer).style.backgroundImage = zielony;
            await sleep(900);
            if (numerPytania != 11) {
                document.getElementById("next").style.display = "block";
            }
            else if (numerPytania == 11) {
                await sleep(5000);
                document.getElementById("container").style.display = "none";
                await sleep(1000);
                document.getElementById("congrats").style.display = "block";
            }
    } else {
        console.log("Juz nie klikaj PeepoGlad");
    }
}

//ba

async function bad(goodAnswer, selected) {
    if (sprawdz == 1) {
        for (i=0;i<3;i++) {
            while (musicTheme.volume = 0) {
                await sleep(1000);
                musicTheme.volume = musicTheme.volume - 0.001;
            }
            finalAnswer.play();
            document.getElementById(selected).style.backgroundImage = zolty;
            await sleep(900);
            console.log('niebieski');
            document.getElementById(selected).style.backgroundImage = niebieski;
            await sleep(900);
        }
            document.getElementById(selected).style.backgroundImage = czerwony;
            finalAnswer.volume = 0;
            wrong.play();
            await sleep(1500);
            document.getElementById(goodAnswer).style.backgroundImage = zielony;
            await sleep(5000);
            document.getElementById("odpowiedzi").style.display = "none";
            document.getElementById("question").style.display = "none";
            await sleep(1000);
            document.getElementById("win").style.display = "block";
    } else {
        console.log("Juz nie klikaj PeepoGlad");    
    }
}

//50/50

var koloDel = ["wartosc", "wart"];
koloDel[0] = kolo;
koloDel[1] = kolo;
console.log("Po" + koloDel[0], koloDel[1]);

while ((koloDel[0] === kolo || koloDel[1] === kolo) || koloDel[0] === koloDel[1]) {
    koloDel[0] = "a" + Math.floor(Math.random() * 4 + 1);
    koloDel[1] = "a" + Math.floor(Math.random() * 4 + 1);
}

//onkey functions

var kolejno = 0;

document.onkeydown = async function(e){
    e = e || window.event;
    var key = e.keyCode;
    if(key===53){
        document.getElementById(koloDel[0]).style.display = "none";
        document.getElementById(koloDel[1]).style.display = "none";
    } else if(key===40) {
        document.getElementById("zdjecie").style.display = "block";
    } else if(key===38) {
        document.getElementById("zdjecie").style.display = "none";
    } else if(key===39) {
        if (kolejno == 0) {
            kolejno++;
            musicTheme.play();
            document.getElementById("question").style.display="block";
        } else if (kolejno == 1) {
            kolejno++;
            document.getElementById("a1").style.display="block";
        } else if (kolejno == 2) {
            kolejno++;
            document.getElementById("a2").style.display="block";
        } else if (kolejno == 3) {
            kolejno++;
            document.getElementById("a3").style.display="block";
        } else if (kolejno == 4) {
            kolejno++;
            document.getElementById("a4").style.display="block";
        } 
    } else if (key===37) {
        document.getElementById("media").style.display="block";
    } 
}

function pozdro() {
    document.getElementById("media").style.display = "none";
}