let jokeBtn = document.querySelector("#jokeBtn");
jokeBtn.addEventListener("click",generateJoke);

// generates a Jokes and renders it on the screen
async function generateJoke(){
    let getJoke = await getRandomJoke();
    let jokeElement = document.querySelector("#joke");
    jokeElement.innerText = getJoke;
}

// fetches JSON data of a random joke from an API and returns the joke text from it
function getRandomJoke(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f9b6ceb8f9mshfa3d27963f0f949p16265fjsnf395bda9dca5',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    let jokeApiUri = "https://dad-jokes.p.rapidapi.com/random/joke";
    let randomJoke = fetch(jokeApiUri, options)
    .then((rawData)=> rawData.json())
    .then((parsedData)=> parsedData.body[0].setup + "\n" + parsedData.body[0].punchline)
    .catch((err)=>err);

    return randomJoke;
}
