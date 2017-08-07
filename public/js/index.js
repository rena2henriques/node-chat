// to begin using socket.io
var socket = io();

// used to detect when a user connects
socket.on('connect', function() {
	console.log('Connected to server.');

});

// used to detect when a user disconnects
socket.on('disconnect', function() {
	console.log('Disconnected from server.');

});

// prints new message when the browser senses a new email
socket.on('newMessage', function(message) {
	console.log('New Message', message);

	var li = jQuery('<li></li>');
	li.text(`${message.from}: ${message.text}`);

	jQuery('#messages').append(li);
});


jQuery('#message-form').on('submit', function(e) {
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name=message]').val()
	}, function(data) {

	});
});