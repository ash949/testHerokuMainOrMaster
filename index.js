const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('HELLO THERE');
});

app.get('/test1', (req, res) => {
  res.send('test 111111111111111111');
});

app.get('/test2', (req, res) => {
  res.send('test 222222222222222222');
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});