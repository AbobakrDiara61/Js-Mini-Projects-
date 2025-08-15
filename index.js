// import createQuote from "./quotes.json";
import * as Ui from "./ui.js";
// import {createQuote} from "./quotes.json";
// Getting Random Index
function* getIndex(limit) {
  while(true) {
    yield Math.floor(Math.random() * limit);
  }
}
// Getting Btn 
const genBtn = document.querySelector(".generate-btn");
genBtn.addEventListener("click", () => {
  fetch("./quotes.json").then(result => result.json())
  .then(jsonObj => {
      const randomIndex = getIndex(jsonObj.length);
      document.body.appendChild(Ui.createQuoteElement(jsonObj[randomIndex.next().value]))
  })
  .catch((error) => console.log(error));
})
genBtn.click(); 