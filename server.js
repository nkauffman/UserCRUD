// server.js -------------------------------------------

	// set up ==========================================
	var express = require('express');
	var app = express();
	var mongoose = require('mongoose');

	// configuration ===================================
	mongoose.connect('mongodb://localhost/newapp');

	app.configure(function() {
		app.use(express.static(__dirname + '/public'));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
	});

	// listen (start app with node server.js) ==========
	app.listen(3000);
	console.log("App listening on port 3000");

// routes ----------------------------------------------
	
	// model definition ================================
	var User = mongoose.model('users', {
		userName: String
	});


	// api =============================================
	app.get('/api/users', function(req, res) {

		User.find(function(err, users) {
			if (err)
				res.send(err)

			res.json(users);
		});
	});

	app.post('/api/users', function(req, res) {

		User.create({
			userName: req.body.userName
		}, function(err, users) {
			res.send(users);
		});


	
	});

	app.put('/api/users/:_id', function(req, res) {

		User.findById(req.params._id, function(err, users) {
			users.userName = req.body.userName;
			console.log(users);
			users.save(function (err) {
			
				res.send(users);
			});
		});
	});

	app.delete('/api/users/:_id', function(req, res) {

		User.remove({
			_id: req.params._id
		}, function(err, users) {
			if (err)
				res.send(err)

			User.find(function(err, users) {
				if (err)
					res.send(err)

				res.json(users);
			});
		});
	});

	

	// application =====================================
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});