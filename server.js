// ================== SERVER.JS ========================

	// set up ------------------------------------------
	var api = require('./routes/api');
	var express = require('express');
	var app = express();	

	// configuration -----------------------------------
	app.configure(function() {
		app.use(express.static(__dirname + '/public'));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
	});

	// listen (start app with node server.js) ----------
	app.listen(3000);
	console.log("App listening on port 3000");

	// routing -----------------------------------------

	// Main Page
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	// API Routing
	app.get('/api/users', api.read);
	app.post('/api/users', api.create);
	app.put('/api/users/:_id', api.update);
	app.delete('/api/users/:_id', api.delete);
