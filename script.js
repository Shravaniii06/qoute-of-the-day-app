// Default Quotes
let quotes = [
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
    { text: "What you think, you become.", author: "Buddha" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" }
];

let favorites = [];

// Display a Quote
function showQuote() {
    let q = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").textContent = q.text;
    document.getElementById("quoteAuthor").textContent = "- " + q.author;
}

showQuote();

// Refresh Quote
function refreshQuote() {
    showQuote();
}

// Share Quote
function shareQuote() {
    let quote = document.getElementById("quoteText").textContent;
    let author = document.getElementById("quoteAuthor").textContent;

    navigator.share({
        title: "Quote of the Day",
        text: `${quote} ${author}`
    });
}

// Add Quote
function addQuote() {
    let text = document.getElementById("newQuote").value;
    let author = document.getElementById("newAuthor").value;

    if (text.trim() === "" || author.trim() === "") {
        alert("Please enter both quote and author.");
        return;
    }

    quotes.push({ text, author });
    alert("Quote added successfully!");

    document.getElementById("newQuote").value = "";
    document.getElementById("newAuthor").value = "";
}

// Add to Favorites
function addToFavorites() {
    let quote = document.getElementById("quoteText").textContent;
    let author = document.getElementById("quoteAuthor").textContent;

    favorites.push(`${quote} ${author}`);

    displayFavorites();
}

// Display Favorite Quotes
function displayFavorites() {
    let list = document.getElementById("favoritesList");
    list.innerHTML = "";

    favorites.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}
