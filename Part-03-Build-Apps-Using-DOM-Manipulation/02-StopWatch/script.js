let hourElement = document.querySelector("#hour");
let minElement = document.querySelector("#min");
let secElement = document.querySelector("#sec");
let msecElement = document.querySelector("#m-sec");

let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
startBtn.addEventListener("click",startPauseTimer);
resetBtn.addEventListener("click",resetTimer);
let interval = null;
function startPauseTimer(){
    let btnText = startBtn.innerText;
    console.log(btnText);
    if(btnText=="Start"||btnText=="Resume"){
        startBtn.innerHTML = "<h1>Stop</h1>";
        interval = setInterval(incMilliSec,10);
    }else if(btnText=="Stop"){
        startBtn.innerHTML = "<h1>Resume</h1>";
        clearInterval(interval);
    }
}
let currMsec = 0;
function incMilliSec(){
    if(startBtn.innerText == "Stop"){
        currMsec = parseInt(msecElement.innerText);
        currMsec = currMsec + 10;
        msecElement.innerText = "" + currMsec;
        if(currMsec == 1000){
            currMsec = 0;
            msecElement.innerText = "000";
            incSec();
        }
    }
}

let currSec = 0;
function incSec(){
    
    if(startBtn.innerText == "Stop"){
        currSec = parseInt(secElement.innerText);
        currSec = currSec + 1;
        secElement.innerText = "" + currSec;
        if(currSec == 60){
            secElement.innerText = "00";
            incMin();
        }
    }

}

let currMin = 0;
function incMin(){
    
    if(startBtn.innerText == "Stop"){
        currMin = parseInt(minElement.innerText);
        currMin = currMin + 1;
        minElement.innerText = "" + currMin;
        if(currMin == 60){
            minElement.innerText = "00";
            incHour();
        }
    }
    
}

let currHour = 0;
function incHour(){
    
    if(startBtn.innerText == "Stop"){
        currHour = parseInt(hourElement.innerText);
        currHour = currHour + 1;
        hourElement.innerText = "" + currHour;
        if(currHour == 24){
            hourElement.innerText = "00";
        }
    }
    
}

function resetTimer(){
    hourElement.innerText = "00";
    minElement.innerText = "00";
    secElement.innerText = "00";
    msecElement.innerText = "000";
    startBtn.innerHTML = "<h1>Start</h1>";
    console.log("Resetted");
}