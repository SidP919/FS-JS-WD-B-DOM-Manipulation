let quoteElement = document.querySelector("#quote");
let authorElement = document.querySelector("#quote-author");
let quoteBtn = document.querySelector("#generate");

// quoteBtn.addEventListener("click", );

(
    async () => {
    
        let quote = await fetch("https://api.quotable.io/random?tags=famous-quotes&maxLength=48")
        .then((rawdata) => rawdata.json())
        .catch((err)=>err)
        .finally(() => {
            console.log("Thanks to https://github.com/lukePeavey/quotable");
        });
    
        if(quote.content!=null){
            quoteElement.style.fontStyle = "italic";
            quoteElement.innerText = quote.content;
            authorElement.innerText = "- " + quote.author;
        }else {
            quoteElement.innerText = "Something went wrong!\nPlease check your internet connection & Refresh the page."
        }
    
    }
)();