let button = document.querySelector("#button");
button.addEventListener("click",changeBgColor);

function changeBgColor(){
    let canvas = document.querySelector("#canvas");
    let getRandomColor = ()=>{
        let hexString = "0123456789ABCDEF"
        let hexLength = hexString.length;
        let hexCode = "#";
        for(let i = 0; i < 6; i++){
            let randomNum = Math.round(Math.random()*15);
            hexCode = hexCode + hexString[randomNum];
        }
        return hexCode;
    }
    let randomColor = getRandomColor();
    console.log(randomColor);
    canvas.style.backgroundColor = randomColor;
}