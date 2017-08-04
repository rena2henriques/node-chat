const path = require('path');

// setting up express
const express = require('express');
var app = express();

// path to public folder
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


app.listen(port, () => {
	console.log(`Listening on port ${port}.`)
});