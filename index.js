// import createQuote from "./quotes.json";
import * as Ui from "./ui.js";
// import {createQuote} from "./quotes.json";
const fetchApi = (api) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.send();
    request.onload = () => {
      if(request.status === 200) resolve(JSON.parse(request.responseText)); // Getting Json Object
      else reject(Error("File Not Found"));
    }
})
// Getting Random Index
function* getIndex(limit) {
  while(true) {
    yield Math.floor(Math.random() * limit);
  }
}
// Getting Btn 
const genBtn = document.querySelector(".generate-btn");
genBtn.addEventListener("click", () => {
  fetchApi("./quotes.json")
  .then((jsonObj) => {
    const randomIndex = getIndex(jsonObj.length);
    document.body.appendChild(Ui.createQuoteElement(jsonObj[randomIndex.next().value]));
  })
  .catch((error) => console.log(error));
})
genBtn.click(); 
/* fetchApi("./quotes.json")
.then((jsonObj) => {
  const randomIndex = getIndex(jsonObj.length);
  document.body.appendChild(Ui.createQuoteElement(jsonObj[randomIndex.next().value]));
  genBtn.addEventListener("click", () => {
    document.body.appendChild(Ui.createQuoteElement(jsonObj[randomIndex.next().value]));
  })
})
.catch((error) => console.log(error));
*/