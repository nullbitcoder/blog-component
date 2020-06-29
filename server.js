const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Helloooo Thereeee');
});

app.listen(5000);
