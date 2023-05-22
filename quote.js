const quote = document.querySelector(".quote")
const time = document.querySelector(".time")

quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
synth = speechSynthesis;

function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..." ;
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
        quote.innerText = result.content;
        authorName.innerText = result.author;
        time.innerText = result.dateAdded
        quoteBtn.classList.remove("loading")
        quoteBtn.innerText = "New Quote" ;
        
    })


}
quoteBtn.addEventListener("click", randomQuote);

