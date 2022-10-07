let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click",generateQRcode)

// generates a QR code and renders it on the screen
function generateQRcode(){
    let inputElement = document.querySelector("#input");
    let imgElement = document.querySelector("#img");
    if(inputElement.value!="" && inputElement.value!=null){
        let qrImgLink = getQRLink(inputElement.value);
        imgElement.src = qrImgLink;
        imgElement.style.marginLeft = "0px";
        imgElement.style.margin = "auto";
        imgElement.style.display = "block";
    }else{
        imgElement.style.display = "none";
        alert("Please enter some text to generate QR code for it.");
    }
}

// fetches image link of QR code from google API and returns that link
function getQRLink(val){
    let searchQuery = val.replaceAll(" ","+");
    let QR_API_URI = "https://chart.googleapis.com/chart?cht=qr&chs=240x240&chl="+searchQuery+"&choe=UTF-8";
    console.log(QR_API_URI);
    return QR_API_URI;
}