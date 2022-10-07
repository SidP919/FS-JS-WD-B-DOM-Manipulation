// get the nodeList of rock, paper & scissors button elements
let rpsBtnElements = document.querySelectorAll(".choice");
for(let i = 0; i < 3; i++){
    rpsBtnElements[i].addEventListener("click",gameOn);
}

// Main function that gets triggered when Rock, Paper & Scissors button are clicked
function gameOn(evt){
    let button;
    if(evt.target == this){ //when div containing image of Rock/Paper/Scissors is clicked
        button = evt.target;
    }else{                  //when image of Rock/Paper/Scissors is clicked
        button = evt.target.parentElement;
    }
    let imgSrc = button.children[0].src;
    imgSrc = imgSrc.substring(imgSrc.indexOf("Images")); //making imgsrc concise
    setUserSelection(imgSrc);
    let compSrc = setCompSelection();
    let winner = getWinner(imgSrc,compSrc);
    updateScore(winner);
}

// shows Rock or Paper or Scissors whichever User selected
function setUserSelection(imgSrc){
    let userElement = document.querySelector("#result-user-stat");;
    if(userElement.children[0]!=null)
        userElement.removeChild(userElement.children[0]);
    let imgElement = document.createElement("img");
    imgElement.style.paddingLeft = "16px";
    imgElement.src = imgSrc;
    userElement.append(imgElement);
}

//shows Rock or Paper or Scissors randomly and returns it as Computer selected image
function setCompSelection(){
    let compElement = document.querySelector("#result-comp-stat");
    let rpsArray = ["Images/rock.png","Images/paper.png","Images/scissors.png"]
    let randomSrc = rpsArray[Math.round(Math.random()*2)];
    if(compElement.children[0]!=null)
        compElement.removeChild(compElement.children[0]);
    let imgElement = document.createElement("img");
    imgElement.style.paddingLeft = "16px";
    imgElement.src = randomSrc;
    compElement.append(imgElement);
    return randomSrc;
}

// It returns Winner based on the User selection and Computer's random selection
function getWinner(playerSrc, compSrc){
    let winner = "";
    if(playerSrc.includes("rock") && compSrc.includes("paper")){
        winner = "comp";
    }else if(playerSrc.includes("rock") && compSrc.includes("scissors")){
        winner = "player";
    }else if(playerSrc.includes("paper") && compSrc.includes("scissors")){
        winner = "comp";
    }else if(playerSrc.includes("paper") && compSrc.includes("rock")){
        winner = "player";
    }else if(playerSrc.includes("scissors") && compSrc.includes("rock")){
        winner = "comp";
    }else if(playerSrc.includes("scissors") && compSrc.includes("paper")){
        winner = "player";
    }else {
        winner = "draw";
    }
    return winner;
}

// Updates various score fields based on the passed value of winner
function updateScore(winner){
    let userScoreElement = document.querySelector("#userScoreVal");
    let compScoreElement = document.querySelector("#compScoreVal");
    let winnerElement = document.querySelector("#result-final-stat");
    let userScore = parseInt(userScoreElement.innerText);
    let compScore = parseInt(compScoreElement.innerText);
    if(winner == "player"){
        userScore = userScore + 1;
        winnerElement.innerText = "Winner: You Won";
    }else if(winner == "comp"){
        compScore = compScore + 1;
        winnerElement.innerText = "Winner: Computer Won";
    }else if(winner == "draw"){
        winnerElement.innerText = "Winner: It\'s a draw";
    }
    userScoreElement.innerText = userScore;
    compScoreElement.innerText = compScore;
}