const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "- Walt Disney",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "- Hellen Keller",
  },
  {
    quote: "Life is what happens when you're making other plans.",
    author: "- John Lennon",
  },
  {
    quote:
      "The past can hurt, but the way I see it you can either run from it or learn from it.",
    author: "- Rafiki from The Lion King",
  },
  {
    quote: "Imagination is the only weapon in the war with reality.",
    author: "- Cheshire cat from Alice in Wonderland",
  },
  {
    quote:
      "You're braver than you believe and stronger than you seem, and smarter than you think.",
    author: "- Christopher Robin, Winnie the Pooh",
  },
  {
    quote:
      "If you focus on what you left behind, you will never see what lies ahead.",
    author: "- Gusteau from Ratatouille",
  },
  {
    quote: "Some people are worth melting for.",
    author: "- Olaf from Frozen",
  },
  {
    quote: "Life is a journey to be experienced, not a problem to be solved.",
    author: "- Pooh, Winnie the Pooh",
  },
  {
    quote: "Sometimes the smallest things take up the most room in your heart.",
    author: "- Pooh, Winnie the Pooh",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
