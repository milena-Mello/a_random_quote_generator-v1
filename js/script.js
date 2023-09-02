/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/** 
* `quotes` array.
* This is a const variable that holds an array of five objects. 
* The tags property was added for the extra credit (not relevant).
**/
const quotes = [
  { quote: "Of all the hardships a person had to face, none was more punishing than the simple act of waiting.", source: "Khaled Hosseini", citation: "A Thousand Splendid Suns, Chapter 18", tags: ["Historical fiction"] },
  { quote: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven..", source: "John Milton", year: 1667 },
  { quote: "When I write, I can shake off all my cares.", source: "Anne Frank", tags: ["Biography", "World War 2"] },
  { quote: "People don't care about what you say, they care about what you build.", source: "Mark Zuckerberg" },
  { quote: "The scariest moment is always just before you start.", source: "Stephen King" }
];



/** 
* `getRandomQuote` function.
* This function gets a random number multiplied by the quantity of objects from quotes var (0 - 4 lengths).
*/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}


/**
* This is an extra implementation to change the background color (on click).
* Source Material: https://codepen.io/mercyikpe/pen/zYvgqvZ
*/
function randomRbgColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.backgroundColor = bgColor;
};


/** 
*`printQuote` function:
* This function prits a quote according to the result from the getRandomQuote().
*/
function printQuote() {
  let quote = getRandomQuote();
  let html =
    `<p class="quote">${quote.quote}</p>
     <p class="source">${quote.source}`

  if (quote.citation) {
    html +=
      `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html +=
      `<span class="year">${quote.year}</span>`
  }
  if (quote.tags && quote.tags.length) {
    html +=
      `<span class="year">${quote.tags.join(', ')}</span>`
  } `</p>`
    ;
  
  randomRbgColor();

  document.getElementById('quote-box').innerHTML = html;
}




/***
 * click event listener for the print quote button 
**/
 document.getElementById('load-quote').addEventListener("click", printQuote, false);

