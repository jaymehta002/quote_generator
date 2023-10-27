// app.js
const express = require('express');
const { getQuote } = require('node-quotegen');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/quote', (req, res) => {
    const quote = getQuote();
    res.json({ quote });
});

app.get('/api/quote/:category', (req, res) => {
    const quote = getQuote(req.params.category);
    res.json({ quote });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
