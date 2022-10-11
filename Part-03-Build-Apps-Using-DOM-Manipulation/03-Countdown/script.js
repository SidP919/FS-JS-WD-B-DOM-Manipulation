let hourElement = document.querySelector("#hour");
let minElement = document.querySelector("#min");
let secElement = document.querySelector("#sec");
let msecElement = document.querySelector("#m-sec");

let secInp = document.querySelector("#secInp");
let minInp = document.querySelector("#minInp");
let hourInp = document.querySelector("#hourInp");

let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
startBtn.addEventListener("click",startPauseTimer);
resetBtn.addEventListener("click",resetTimer);
let interval = null;
function startPauseTimer(){
    let btnText = startBtn.innerText;
    console.log(btnText);
    if(btnText=="Start"){
        if(!(secInp.value == 0 && minInp.value == 0 && hourInp.value == 0)){
            startBtn.innerHTML = "<h1>Stop</h1>";
            secInp.disabled = true;
            minInp.disabled = true;
            hourInp.disabled = true;
            secElement.innerText = secInp.value;
            minElement.innerText = minInp.value;
            hourElement.innerText = hourInp.value;
            currSec = parseInt(secInp.value);
            currMin = parseInt(minInp.value);
            currHour = parseInt(hourInp.value);
            interval = setInterval(incMilliSec,10);
        }else{
            alert("Countdown Input is set to 0 currently, please increment it to start a valid countdown.")
        }
    }else if(btnText=="Stop"){
        startBtn.innerHTML = "<h1>Resume</h1>";
        clearInterval(interval);
    }else if(btnText=="Resume"){
        startBtn.innerHTML = "<h1>Stop</h1>";
        interval = setInterval(incMilliSec,10);
    }
}
let currMsec = 0;
function incMilliSec(){
    if(startBtn.innerText == "Stop"){
        if(currMsec>0){
            currMsec = currMsec - 10;
            msecElement.innerText = "" + currMsec;
        }else if(currMsec <= 0 && (currSec > 0 || currMin > 0 || currHour > 0)){
            currMsec = 1000;
            msecElement.innerText = "1000";
            incSec();
        }else if(currMsec == 0){
            msecElement.innerText = "000";
            secElement.innerText = "00";
            minElement.innerText = "00";
            hourElement.innerText = "00";
            clearInterval(interval);
        }
    }
}

let currSec = 00;
secElement.innerText = "00";
function incSec(){
    
    if(startBtn.innerText == "Stop"){
        currSec = parseInt(secElement.innerText);
        if(currSec>0){
            currSec = currSec - 1;
            secElement.innerText = "" + currSec;
        }else if(currSec <= 0 && (currMin > 0 || currHour > 0)){
            currSec = 60;
            secElement.innerText = "60";
            incMin();
        }
    }

}

let currMin = 0;
minElement.innerText = "00";
function incMin(){
    
    if(startBtn.innerText == "Stop"){
        currMin = parseInt(minElement.innerText);
        if(currMin>0){
            currMin = currMin - 1;
            minElement.innerText = "" + currMin;
        }else if(currMin <= 0 && currHour > 0){
            currMin = 60;
            minElement.innerText = "60";
            incHour();
        }
    }
    
}

let currHour = 0;
hourElement.innerText = "00";
function incHour(){
    
    if(startBtn.innerText == "Stop"){
        currHour = parseInt(hourElement.innerText);
        if(currHour>0){
            currHour = currHour - 1;
            hourElement.innerText = "" + currHour;
        }
    }
    
}

function resetTimer(){
    hourElement.innerText = "00";
    minElement.innerText = "00";
    secElement.innerText = "00";
    msecElement.innerText = "000";
    startBtn.innerHTML = "<h1>Start</h1>";
    clearInterval(interval);
    secInp.disabled = false;
    minInp.disabled = false;
    hourInp.disabled = false;
    secInp.value = 0;
    minInp.value = 0;
    hourInp.value = 0;
    console.log("Resetted");
}