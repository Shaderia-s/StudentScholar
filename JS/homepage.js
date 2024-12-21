<script>
    async function fetchQuote() {
        try {
            const response = await fetch('https://zenquotes.io/api/random');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const quote = data[0].q; // The quote text
            const author = data[0].a; // The author

            // Update the quote text inside the overlay
            document.getElementById('quote-text').textContent = `"${quote}" - ${author}`;
        } catch (error) {
            console.error('Error fetching quote:', error.message);
            document.getElementById('quote-text').textContent = "An inspirational quote will appear here.";
        }
    }

    // Fetch a quote when the page loads
    window.onload = fetchQuote;
</script>
