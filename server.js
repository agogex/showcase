const express = require('express'),
	app = express(),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose'),
	config = require('config');


app.use(express.static('public'));
app.use('/static', express.static('node_modules'));

mongoose.connect(config.database);

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
});