// Grab 'User' model so CRUD API can manipulate it
var User = require('../models/model').User;

// Create
exports.create = function(req, res) {

	User.create({userName: req.body.userName}, 
		function(err, users) {
			if (!err) {
				res.send(users);
			} else if (err) {
				res.send(err);
			}
		}	
	);
}

// Read	
exports.read = function(req, res) {

	User.find(function(err, users) {
		if (!err) {
			res.send(users);
		} else if (err) {
			res.send(err);
		}				
	});
}

// Update
exports.update = function(req, res) {

	User.findById(req.params._id, function(err, users) {
		users.userName = req.body.userName;
		console.log(users);
		users.save(function() {
			if (!err) {
				res.send(users);
			} else if (err) {
				res.send(err);
			}	
		});
	});	
}

// Delete
exports.delete = function(req, res) {

	User.remove({_id: req.params._id}, function(err, users) {
		if (!err) {
			res.send(users);
		} else if (err) {
			res.send(err);
		}	
	});
}
