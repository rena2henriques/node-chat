const path = require('path');
const http = require('http');

// setting up express
const express = require('express');
var app = express();

const socketIO = require('socket.io');

// path to public folder
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// inside app there's a function with req and res configured
var server = http.createServer(app);

// to begin using socket.io
var io = socketIO(server);

// to begin analysing sockets
io.on('connection', (socket) => {
	// prints when a new user connect
	console.log('New user connected');

	// send a message to the user when it enters the chat app
	socket.emit('newMessage', {
		from: 'Admin',
		text: 'Welcome to the chat app',	
		createdAt: new Date().getTime()
	});

	// sends a message to every other user but himself
	socket.broadcast.emit('newMessage', {
		from: 'Admin',
		text: 'New user joined',
		createdAt: new Date().getTime()
	});

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);

		io.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});

		/*socket.broadcast.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});*/
	})

	// detects when a user disconnects
	socket.on('disconnect', () => {
		console.log('Client disconnected.');
	});
});

// used to retrieve the files from public folder
app.use(express.static(publicPath));


server.listen(port, () => {
	console.log(`Listening on port ${port}.`)
});