const express = require('express');
const app = express();

// Setup pug as view engine.
app.set('views', './views');
app.set('view engine', 'pug');

// Setup directory for external javascript
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index', {});
});

module.exports = app;
