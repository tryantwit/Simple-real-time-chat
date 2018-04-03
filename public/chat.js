window.onload = () => {
  const messages = [];
  const socket = io.connect('http://localhost:3001');
  const field = document.getElementById('field');
  const sendButton = document.getElementById('send');
  const content = document.getElementById('content');

  socket.on('message', (data) => {
    if (data.message) {
      messages.push(data.message);
      let html = '';
      for (let i=0; i < messages.length; i++) {
        html += messages[i] + '<br />';
      }
      content.innerHTML = html;
    } else {
      console.log(`There is a problem: ${data}`);
    }
  });

  sendButton.onclick = () => {
    let text = field.value;
    socket.emit('send', { message: text });
  };
}
