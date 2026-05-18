const express = require('express');
const app = express();
const port = 3001;

const bookmarks = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/bookmarks', (req, res) => {
  const { url, title, category } = req.body;
  bookmarks.push({ url, title, category, addedAt: Date.now() });
  console.log('Saved bookmark:', { url, title, category });
  res.redirect('/');
});

app.get('/bookmarks', (req, res) => {
  res.json(bookmarks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
