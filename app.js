const express = require('express');
const path = require('path');
const app = express();

app.get('/gato.jpg', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

module.exports = app;