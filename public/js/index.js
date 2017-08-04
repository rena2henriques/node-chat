// to begin using socket.io
var socket = io();

// used to detect when a user connects
socket.on('connect', function() {
	console.log('Connected to server.');

	socket.emit('createMessage', {
		from: 'yourMom@isdumb.com',
		text: 'the email speaks for itself'
	})
});

// used to detect when a user disconnects
socket.on('disconnect', function() {
	console.log('Disconnected from server.');

});

// prints new message when the browser senses a new email
socket.on('newMessage', function(message) {
	console.log('New Message', message);

});
