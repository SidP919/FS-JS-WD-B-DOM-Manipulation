const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// EventListener to copy text to clipboard
clipboardEl.addEventListener('click', () => {
    // get the password from the result element
    if(resultEl.innerText != "" && resultEl.innerText != null){
        let pwd = resultEl.innerText.substring(0,99999);
        // Copy the text inside the result element to clipboard
        navigator.clipboard.writeText(pwd);
    }else{
        alert("Please generate a password first, before you try to copy it.")
    }
});

// EventListener to get generated password and put it into result element
generateEl.addEventListener('click', () => {
    let lower = lowercaseEl.checked;
    let upper = uppercaseEl.checked;
    let number = numbersEl.checked;
    let symbol = symbolsEl.checked;
    let length = lengthEl.value;
    if(length <= 0){     
        alert("Password length is less than or equal to 0, we cannot generate a new password!");
    }else if(length>99){
        length = 99;
        lengthEl.value = length;
    }
    if(length>0){
        resultEl.innerText = generatePassword(lower, upper, number, symbol, length);
    }
});

//returns a password based on the current state of checkboxes
function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    for(let i = 0; i < length;){
        if(lower && (i < length)){
            password = password + getRandomLower();
            i++;
        }
        if(upper && (i < length)){
            password = password + getRandomUpper();
            i++;
        }
        if(number && (i < length)){
            password = password + getRandomNumber();
            i++;
        }
        if(symbol && (i < length)){
            password = password + getRandomSymbol();
            i++;
        }
    }
    return password;
}

// returns a random lowercase letter
function getRandomLower() {
    let lowerStr = "abcdefghijklmnopqrstuvwxyz";
    return lowerStr[Math.round(Math.random()*25)];
}

// returns a random uppercase letter
function getRandomUpper() {
    let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperStr[Math.round(Math.random()*25)];
}

// returns a random digit
function getRandomNumber() {
    let numStr = "0123456789";
    return numStr[Math.round(Math.random()*9)];
}

// returns a random symbol
function getRandomSymbol() {
    let symbolStr = "~!@#$^&*_+";
    return symbolStr[Math.round(Math.random()*9)];
}