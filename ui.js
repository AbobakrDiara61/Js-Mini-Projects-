export function createQuoteElement({ quote, author }) {
    const quoteWrapper = document.querySelector(".quote-wrapper");

    const quoteText = document.querySelector(".quote");
    quoteText.textContent = quote;

    const quoteAuthor = document.querySelector(".author");
    quoteAuthor.textContent = author;

    return quoteWrapper;
}