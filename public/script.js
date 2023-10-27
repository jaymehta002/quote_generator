const quoteText = document.getElementById('quote-output');
const generateBtn = document.getElementById('generate-button');
const categorySelect = document.getElementById('quote-type');
const copyBtn = document.getElementById('copy-button');

generateBtn.addEventListener('click', () => {
    const category = categorySelect.value;
    if (category !== 'none') {
        const url = `api/quote/${category}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                quoteText.value = data.quote;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    } else {
        const url = '/api/quote';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                quoteText.value = data.quote;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    }
});

copyBtn.addEventListener('click', () => {
    quoteText.select();
    document.execCommand('copy');
    alert('Copied to clipboard');
});




