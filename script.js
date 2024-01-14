async function fetchQuote() {
    const endpoint = 'https://thatsthespir.it/api';
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayQuote(data);
    } catch (error) {
        displayError(error);
    }
}
function displayQuote(data) {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.querySelector('#quote').textContent = data.quote;
    quoteContainer.querySelector('#author').textContent = `- ${data.author}`;
}

function displayError(error) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';
    errorMessage.textContent = `Failed to load quote: ${error.message}`;
}

document.getElementById('new-quote').addEventListener('click', () => {
    fetchQuote();
})
fetchQuote();