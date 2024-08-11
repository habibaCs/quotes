// Quotes

let allQuote = [
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    Auther: "Bernard M. Baruch",
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    Auther: "BMahatma Gandhi",
  },
  {
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
    `,
    Auther: "J.K. Rowling",
  },
  {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    Auther: "Maya Angelou",
  },
  {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    Auther: "Mahatma Gandhi",
  },
  {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    Auther: "Andre Gide",
  },
];

let guoteId = document.getElementById("quote-id");
let previousRandomQuote = -1;
function addQuote() {
  let output = "";

  let randomQuote;
  do {
    randomQuote = Math.floor(Math.random() * allQuote.length);
  } while (randomQuote === previousRandomQuote);

  output += `
<div 
class="quote">
<h2 class="mb-0 text-color text-uppercase">Quote</h2>
<p class="lead mt-4" >
${allQuote[randomQuote].quote}
</p>
<p class="aouther mt-4 text-end text-secondary">${allQuote[randomQuote].Auther}</p>
</div>`;
  previousRandomQuote = randomQuote;
  guoteId.innerHTML = output;
}
