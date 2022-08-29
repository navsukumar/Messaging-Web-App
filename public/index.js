
var socket = io();

socket.emit('join', name);


// if form is submitted, cause a chat message event
$('form').submit(function(e) {
    e.preventDefault();

    socket.emit('message', name + ": " + $('#m').val());

    $('#messages').append($('<li id="list">').text('You:  ' + $('#m').val()));

        $('#m').val('');

    return false;
});

socket.on('message', (msg) => {
    $('#messages').append($('<li>').text(msg));
});