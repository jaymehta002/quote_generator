const quoteText = document.getElementById('quote-output');
const generateBtn = document.getElementById('generate-button');
const categorySelect = document.getElementById('quote-type');
const copyBtn = document.getElementById('copy-button');
const copySuccessAlert = document.querySelector('.copy-success-alert');

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
    copySuccessAlert.style.display = 'block';
    setTimeout(() => {
        copySuccessAlert.style.display = 'none';
    }, 1000);
});


const popupDialog = document.getElementById('popup-dialog');

copyBtn.addEventListener('click', () => {
    const quoteText = document.getElementById('quote-output');
    quoteText.select();
    document.execCommand('copy');

    // Show the pop-up dialog
    popupDialog.style.display = 'block';

    // Hide the pop-up dialog after 2 seconds (2000 milliseconds)
    setTimeout(() => {
        popupDialog.style.display = 'none';
    },1000);
});
