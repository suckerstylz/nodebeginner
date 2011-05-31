var Users = require('../lib/mongoose-models/users');
var Messages = require('../lib/mongoose-models/messages');

exports.dashboard = function(req, res) {
	console.log('Request handler for -start- was called.');
	var date = new Date();
	var today = date.getDate()+'. '+date.getMonth()+'. '+date.getFullYear();
	Messages.find({messageType: 'message'}, function(err, messages){
	Messages.find({messageType: 'reminder'}, function(err, reminder){
	Users.find({}, function(err, users){
		if(!err){
			res.render('dashboard', {
				locals: {
					title: 'Dashboard',
					total: users.length,
					messages: messages,
					reminder: reminder,
					date: today
				}
			});
		} else {
			res.render('dashboard', {
				locals: {
					title: 'Dashboard',
					total: '0',
					date: today
				}
			});
		}
	});	
	});
	});
};

exports.login = function(req, res) {
	console.log('Req handler for -login- was called');
	res.render('login', {
		locals: {
			title: 'Login'
		}
	});
};

exports.logout = function(req, res) {
	console.log('Req handler for -logout- was called');
	res.render('logout');
};

exports.mite = function(req, res) {
	console.log('Req handler for -mite- was called');
	res.render('mite');
};

exports.upload = function(req, res) {
	console.log('Request handler for -upload- was called');
	res.render('upload', {
		locals: {
			title: 'Upload'
		}
	});
};

exports.users = function(req, res) {
	
	console.log('Request handler for -names- was called');
	
	postData = req.body;
	
	if(postData){
		var user = new Users();
		user.name = req.body.newname;
		user.age = req.body.age;
		user.save(function(err){
			if(!err) {
				Users.find({}, function(err, names){
					res.render('users', {
						locals: {
							title: 'Users',
							names: names
						}
					});
				});
			} else {
				console.log(err);
			}
		});
		
	}	else {
		Users.find({}, function(err, names){
			if(!err){
				res.render('users', {
					locals: {
						title: 'Users',
						names: names
					}
				});
			} else {
				console.log(err);
			}
		});
	}
};

exports.usersDelete = function(req, res){
	console.log('Request handler for deleting name with id '+req.params.id);
	
	Users.findOne({ _id: req.params.id }, function(err, name){
		if(name){
			name.remove(function(err){
				if(!err) {
					res.redirect('back');
				} else {
					console.log(err);
				}
			});
		} else {
			console.log('No entry with given id found');
		}
	})
	
};


exports.messages = function(req, res){
	console.log('Request handler for -messages- was called');
	var action = req.params.action;
	if(action && action == 'add') {
		message = new Messages();
		message.message = req.body.message;
		message.messageType = req.body.type;
		message.save(function(err){
			if(!err) res.redirect('back');
		});
	}
	if(action && action == 'delete') {
		Messages.findOne({ _id: req.params.id }, function(err, message){
			if(!err) {
				message.remove(function(err){
					if(!err){
						res.redirect('back');
					}
				})
			}
		});
	}
};

exports.noRoute = function(req, res){
	console.log('Request handler for -noRoute- was called');
    res.render('404', {
			locals: {
				title: '404 - Not Found'
			}
		});
};