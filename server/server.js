const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);



const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New user connnected');

   socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

   socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));


    socket.emit('newMessage', {
        from: 'JohnCena@example.com',
        text: 'You can not see me',
        createdAt: 1234
    })

    socket.on('createMessage', (message) => {
        console.log('messsage', message);
        io.emit('newMessage', generateMessage(message.from, message.text)); //this will send to everyone!!
        callback();
        //
        //
        //
        // socket.broadcast.emit('newMessage', { -----this will send the message to everyone except this person
   //              from: message.from,
   //              text: message.text,
   //              createdAt: new Date().getTime()
   //          })
    })
    })



    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })

});




server.listen(port, () => {
    console.log(`Server is running up on port ${port}`);
});


