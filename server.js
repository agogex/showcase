require('dotenv').config();

const express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	uriUtil = require('mongodb-uri'),
    mongooseUri = uriUtil.formatMongoose(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`),
	config = require('./config');


app.use(express.static('public'));
app.use('/static', express.static('node_modules'));
app.use(bodyParser.json());

app.use(require('./app/routes'));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, function () {
	mongoose.connect(mongooseUri, {}, err => {
        if (err) {
            console.log(err);
        }
    });
	console.log('app is running...');
});