let keysElementArr = document.querySelectorAll(".keyText");
let inputElement = document.querySelector("#expression");
inputElement.focus();
let inputKey;
inputElement.addEventListener("keypress",(e)=>{
    inputKey = e.key;
    if(inputKey == 'Enter' && inputElement.value != "" && !inputElement.value.startsWith("=")){
        let inputVal = inputElement.value;
        try{
            let result = eval(inputVal);
            inputElement.value = "= "+result;
        }catch(e){
            console.log(e.message);
            alert("Error: "+e.message + "!!\nPlease enter valid input for evaluation.");
        }
    }else if(inputKey == 'Enter' && inputElement.value.startsWith("=")){
        inputElement.value = "";
    }
});
inputElement.addEventListener("input",(e)=>{
    let keysStr = "0123456789/*-+%()";
    let inputVal = e.target.value;
    console.log(inputVal);
    if(inputVal.startsWith("=")){
        inputElement.value = "";
    }else if(inputKey == "="){
        let inputVal = inputElement.value;
        try{
            let result = eval(inputVal.substring(0,inputVal.length-1));
            inputElement.value = "= "+result;
        }catch(e){
            console.log(e.message);
            alert("Error: "+e.message + "!!\nPlease enter valid input for evaluation.");
        }
    }else{
        if(!keysStr.includes(inputKey) && inputKey != "="){
            inputElement.value = inputVal.replace(inputKey,"");
        }
    }
});

for(let i = 0; i < keysElementArr.length; i++){
    keysElementArr[i].addEventListener("click",(e)=>{
        let keyPressed = e.target.innerText;
        let inputVal = inputElement.value;
        if(keyPressed != "=" && keyPressed != "Clear"){
            if(inputVal.startsWith("=")){
                inputElement.value = "";
            }
            inputVal = inputElement.value + keyPressed;
            inputElement.value = inputVal;
        }else if(inputVal.startsWith("=")){
            inputElement.value = "";
        }else if(keyPressed == "=" && inputVal != ""){
            try{
                let result = eval(inputVal);
                inputElement.value = "= "+result;
            }catch(e){
                console.log(e.message);
                alert("Error: "+e.message + "!!\nPlease enter valid input for evaluation.");
            }
        }else if(keyPressed == "Clear"){
            inputElement.value = (inputElement.value).substring(0,inputVal.length-1);
        }
    });
}