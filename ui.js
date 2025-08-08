export function createQuoteElement({ quote, author }) {
    const quoteWrapper = document.createElement("div");
    quoteWrapper.classList.add("quote");

    const quoteText = document.createElement("h2");
    quoteText.textContent = quote;

    const quoteAuthor = document.createElement("h4");
    quoteAuthor.textContent = author;

    quoteWrapper.appendChild(quoteText);
    quoteWrapper.appendChild(quoteAuthor);

    return quoteWrapper;
}
