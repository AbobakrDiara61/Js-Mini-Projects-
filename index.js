// import createQuote from "./quotes.json";
import * as Ui from "./ui.js";
// import {createQuote} from "./quotes.json";
// Getting Json Object
const request = new XMLHttpRequest();
request.open("GET", "quotes.json");
request.send();


function* getIndex(limit) {
  while(true) {
    yield Math.floor(Math.random() * limit);
  }
}
request.onreadystatechange = () => {
  if(request.status === 200 && request.readyState === 4) {
    const quotesJson = JSON.parse(request.responseText);
    // console.log(quotesJson);
    let quoteArray = [];
    
    for(let quote of quotesJson) {
      quoteArray.push(Ui.createQuoteElement(quote));
    }
    console.log(quoteArray);
    const randomIndex = getIndex(quoteArray.length);
    console.log(quoteArray[randomIndex.next().value])
    // document.body.appendChild(Ui.createQuoteElement(quoteArray[randomIndex.next().value]));
    document.body.appendChild(quoteArray[randomIndex.next().value]); 
  }
}