const express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	config = require('./config');


app.use(express.static('public'));
app.use('/static', express.static('node_modules'));
app.use(bodyParser.json());

mongoose.connect(config.database);

app.use(require('./app/routes'));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port, function () {
	console.log('Example app listening on port ' + config.port);
});