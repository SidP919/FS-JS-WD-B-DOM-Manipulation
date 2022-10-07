let convertBtn = document.querySelector(".naming_conversion #convert-btn");
convertBtn.addEventListener("click",printTextCases);

//prints entered text in different cases
function printTextCases(){
    let textEntered = document.querySelector(".naming_conversion #text").value;
    console.log("Entered Text: ", textEntered);
    if(textEntered != "" && textEntered != null){
        let targetParaArr = document.querySelectorAll(".naming_conversion .cases_div .case_div");
        //Camel Case
        let camel = textEntered[0].toLowerCase();
        let len = textEntered.length;
        for(let i = 1; i < len; i++){
            if(textEntered[i] == " "){
                continue;
            }else if(textEntered[i-1] == " "){
                camel = camel + textEntered[i].toUpperCase();
            }else{
                camel = camel + textEntered[i];
            }
        }
        console.log("CamelCase: ",camel);
        targetParaArr[0].querySelector("#camel-case").innerText = camel;
        
        //Pascal Case
        let pascal = camel[0].toUpperCase() + camel.substring(1);
        console.log("PascalCase: ",pascal);
        targetParaArr[1].querySelector("#pascal-case").innerText = pascal;

        //Snake Case
        let snake = textEntered[0].toLowerCase();
        for(let i = 1; i < len; i++){
            if(textEntered[i] == " " && i != len-1){
                snake = snake + "_";
            }else{
                snake = snake + textEntered[i];
            }
        }
        console.log("SnakeCase: ",snake);
        targetParaArr[2].querySelector("#snake-case").innerText = snake;

        //Screaming Snake Case
        let screamSnake = snake.toUpperCase();
        console.log("ScreamingSnakeCase: ",screamSnake);
        targetParaArr[3].querySelector("#screaming-snake-case").innerText = screamSnake;

        // Kebab Case
        let kebab = snake.replace(/_/g,"-");
        console.log("KebabCase: ",kebab);
        targetParaArr[4].querySelector("#kebab-case").innerText = kebab;

        // Screaming Kebab Case
        let screamingKebab = kebab.toUpperCase();
        console.log("ScreamingKebabCase: ",screamingKebab);
        targetParaArr[5].querySelector("#screaming-kebab-case").innerText = screamingKebab;
    }else{
        alert("Please give us a text to convert!");
    }

}