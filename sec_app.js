const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, World! This is my second server.');
});

app.get('/about', (req, res) => {
  res.json('Hello, World! This is the about page.');
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString() });
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  const age = req.query.age;
  res.json({ greeting: 'Hello, ' + name + '!' + 'You are ' + age + ' years old!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});