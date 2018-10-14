const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log("Connected to socket.io");
    socket.on('new-message', (msg) => {
        io.emit('recieve-message', msg);
    });
})

http.listen('3200', () => console.log('server is up and listening at port 3200'));