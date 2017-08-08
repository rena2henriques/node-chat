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

socket.on('newLocationMessage', function(message) {
	var li = jQuery('<li></li>');
	var a = jQuery('<a target="_blank" >My current Location</a>');

	li.text(`${message.from}: `);
	a.attr('href', message.url);
	li.append(a);
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

var locationButton = jQuery('#send-location');

locationButton.on('click', function() {
	if(!navigator.geolocation) {
		return alert('Geolocation not supported by your browser!');
	}

	navigator.geolocation.getCurrentPosition(function(position) {
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}, function () {
		alert('Unable to fetch location.');
	});
});