const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

// Setup directory for external javascript
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index', {});
});

app.listen(3001);
console.log('Listening on port 3001');
