const start = (io) => {
  io.sockets.on('connection', (socket) => {
    socket.emit('message', { message: 'Welcome to the chat' });
    socket.on('send', (data) => {
      io.sockets.emit('message', data);
    });
  });
}

module.exports = Object.assign({}, {start});
