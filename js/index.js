const programmingJokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the CSS developer go to therapy? To get rid of his margins.",
    "How do you comfort a JavaScript developer? You console them.",
    "Why did the CSS developer leave the restaurant? Because it had no class.",
    "Why did the JavaScript developer go missing? Because he didn't know when to return.",
    "Why did the HTML tag go to the party? Because it wanted to break the line.",
    "Why do JavaScript developers wear glasses? Because they don't C#.",
    "Why don't programmers like to use inline styles? Because they want to be classy.",
    "Why did the CSS selector break up with the HTML element? It found someone more specific.",
    "Why did the CSS developer apply for a job? They wanted to get a position.",
  ];


function randomJokes() {
    const jokesList = []
   
        while (jokesList.length <2)   {
        let random = Math.floor(Math.random() * programmingJokes.length) 
        if (!jokesList.includes(programmingJokes[random])) {
            jokesList.push(programmingJokes[random])
        }   
    }
    return jokesList;
}
const genJokes = randomJokes()
console.log(genJokes)

/*function randomJokes() {
  const jokesList = [];
  
  for (let i = 0; i < 2; i++) {
    let randomIndex = Math.floor(Math.random() * programmingJokes.length);
    jokesList.push(programmingJokes[randomIndex]);
  }

  return jokesList;
}

const result = randomJokes();
console.log(result);*/
