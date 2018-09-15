const express = require('express');
const app = express();

// for sass
require('all-that-sass')({
  watch:  'scss',
  input:  './scss/styles.scss',
  output: './www/css/styles.css',
  reportErrors: true,
  reportCompiles: true,
  outputStyle: 'compressed'
});

// from the www folder
app.use(express.static('www'));

// Start the web server on port 3000
app.listen(3000,() => console.log('Listening on port 3000'));
