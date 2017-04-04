require('dotenv');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.listen(3000, function() {
  console.log('listening at http://localhost:3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
