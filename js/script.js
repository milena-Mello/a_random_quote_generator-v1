/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/** 
* `quotes` array.
* This is a const variable that holds an array of five objects. 
* The tag property was added as an extra credit.
**/
let quotes = [
  { quote: "Of all the hardships a person had to face, none was more punishing than the simple act of waiting.", source: "Khaled Hosseini", citation: "A Thousand Splendid Suns, Chapter 18", tag: "Historical fiction" },
  { quote: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven..", source: "John Milton", year: 1667 },
  { quote: "When I write, I can shake off all my cares.", source: "Anne Frank", tag: "Biography" },
  { quote: "People don't care about what you say, they care about what you build.", source: "Mark Zuckerberg" },
  { quote: "The scariest moment is always just before you start.", source: "Stephen King" }
];



/** 
* `getRandomQuote` function.
* This function gets a random number multiplied by the quantity of objects from quotes var (0 - 4 lengths).
*/
function getRandomQuote() {
  let RandomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[RandomNumber];
}
/**
* This is an extra implementation to change the background color (on click).
* Source Material: https://codepen.io/mercyikpe/pen/zYvgqvZ
*/
function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

  document.body.style.background = bgColor;
  }
random_bg_color();



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
  if (quote.tag) {
    html +=
      `<span class="year">${quote.tag}</span>`
  } `</p>`
    ;
  document.getElementById('quote-box').innerHTML = html;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);