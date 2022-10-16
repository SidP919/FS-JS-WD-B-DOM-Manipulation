let text =  document.querySelector("#text");
let result = document.querySelector("#result");

document.querySelector("#count").addEventListener("click",()=>{
    let input = text.value.toLowerCase();
    let check = "NA";
    console.log("Reverse of Input: " + input.split("").reverse().join(""));
    if(input != "" && input == input.split("").reverse().join(""))
        check = "Yes";
    else if(input != "")
        check = "No";
    else
        check = "NA";
    result.innerText = `Is it a Palindrome? - ${check}`;
});