const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //   res.send('Helloooo Thereee');
  res.render('index');
});

app.listen(5000);
