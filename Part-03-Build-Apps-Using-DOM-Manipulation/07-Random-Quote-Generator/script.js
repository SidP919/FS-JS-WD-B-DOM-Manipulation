let quoteElement = document.querySelector("#quote");
let authorElement = document.querySelector("#quote-author");
let quoteBtn = document.querySelector("#generate");

quoteBtn.addEventListener("click", async () => {
    
    let quote = await fetch("https://api.quotable.io/random?tags=famous-quotes&maxLength=48")
    .then((rawdata) => rawdata.json())
    .then((parsedData) => parsedData)
    .catch((err)=>err)
    .finally(() => {
        console.log("Thanks to https://github.com/lukePeavey/quotable");
    });

    quoteElement.style.fontStyle = "italic";
    quoteElement.innerText = quote.content;
    authorElement.innerText = "- " + quote.author;

});