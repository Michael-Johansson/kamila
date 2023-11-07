"use strict";

const headingEl = document.getElementById("heading");
const quoteEl = document.getElementById("quote");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");

const quotes = [
  "Du gjør meg til verdens lykkeligste person.",
  "Du har verdens vakreste øyner.",
  "Ingen kan samenlignes med deg.",
];
let quoteIndex = 0;

const renderQuote = () => {
  headingEl.textContent = `Grunn ${quoteIndex + 1}`;
  quoteEl.textContent = quotes[quoteIndex];
};

const nextQuote = () => {
  if (quoteIndex === quotes.length - 1) {
    return;
  }
  quoteEl.classList.remove("show");
  quoteEl.classList.add("hide");

  setTimeout(() => {
    quoteIndex++;
    renderQuote();
    quoteEl.classList.toggle("hide");
    quoteEl.classList.toggle("show");
  }, 700);
};

const previousQuote = () => {
  if (quoteIndex === 0) {
    return;
  }
  quoteEl.classList.remove("show");
  quoteEl.classList.add("hide");
  setTimeout(() => {
    quoteIndex--;
    renderQuote();
    quoteEl.classList.toggle("hide");
    quoteEl.classList.toggle("show");
  }, 700);
};

nextBtn.addEventListener("click", nextQuote);
previousBtn.addEventListener("click", previousQuote);

renderQuote();
