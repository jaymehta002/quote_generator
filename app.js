const express = require("express");
const { getQuote } = require("node-quotegen");

const app = express();

app.get("/api/quote", (req, res) => {
  const quote = getQuote();
  res.json({ quote });
});
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.redirect('/index.html');
});
app.get("/api/quote/:category", (req, res) => {
  const quote = getQuote(req.params.category);
  res.json({ quote });
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});