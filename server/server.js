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