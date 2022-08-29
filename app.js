var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = require('socket.io')(server);
var path = require('path');


app.use(express.static(path.join(__dirname,'./public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


var name;

io.on('connection', (socket) => {
  console.log("a new user has connected!");
  name = ""

  socket.on('join', (username) => {
    socket.broadcast.emit('message', `${username} just joined the chat!`);
    name = username
  });

  socket.on('message', (msg) => {
    socket.broadcast.emit('message', `${msg}`);
  });


  socket.on('disconnect', () => {
    socket.broadcast.emit('message', `${name} has left the chat`);

  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on :3000');
});


