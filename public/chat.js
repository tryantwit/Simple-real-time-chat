window.onload = () => {
  const messages = [];
  const socket = io.connect('http://localhost:3001');
  const field = document.getElementById('field');
  const sendButton = document.getElementById('send');
  const content = document.getElementById('content');
  const name = document.getElementById('name');

  socket.on('message', (data) => {
    if (data.message) {
      messages.push(data);
      let html = '';
      for (let i=0; i < messages.length; i++) {
        html += '<b>' + (messages[i].username ? messages[i].username : 'anonymous') + ': </b>';
        html += messages[i].message + '<br />';
      }
      content.innerHTML = html;
      content.scrollTop = content.scrollHeight;
    } else {
      console.log(`There is a problem: ${data}`);
    }
  });

  sendButton.onclick = sendMessage = () => {
    if (name.value == "") {
      alert('Please type your name!');
    } else {
      let text = field.value;
      socket.emit('send', { message: text, username: name.value });
    }
  };
}
