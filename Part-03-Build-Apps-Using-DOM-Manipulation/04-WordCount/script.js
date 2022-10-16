let text =  document.querySelector("#text");
let result = document.querySelector("#result");

document.querySelector("#count").addEventListener("click",()=>{
    let length = text.value.length;
    result.innerText = `No of characters- ${length}`;
});