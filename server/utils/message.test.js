var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from: from,
			text: text
		});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Mark';
		var latitude = 15;
		var longitude = 14;
		var url = 'https://w ww.google.com/maps?q=15,14';
		var locationMessage = generateLocationMessage(from, latitude, longitude);

		expect(locationMessage.createdAt).toBeA('number');
		expect(locationMessage).toInclude({
			from: from,
			url: url
		});
	});
});
