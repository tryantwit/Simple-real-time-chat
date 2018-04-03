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

const io = require('socket.io').listen(app.listen(3001));
console.log('Listening on port 3001');

io.sockets.on('connection', (socket) => {
  socket.emit('message', { message: 'Welcome to the chat' });
  socket.on('send', (data) => {
    io.sockets.emit('message', data);
  });
});
