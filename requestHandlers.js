var Names = require('./lib/mongoose-models/names');

exports.dashboard = function(req, res) {
	console.log('Request handler for -start- was called.');
	
	res.render('dashboard', {
		locals: {
			title: 'Dashboard'
		}
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

exports.names = function(req, res) {
	
	console.log('Request handler for -names- was called');
	
	postData = req.body;
	
	if(postData){
		var name = new Names();
		name.name = req.body.newname;
		name.age = req.body.age;
		name.save(function(err){
			if(!err) {
				Names.find({}, function(err, names){
					res.render('names', {
						locals: {
							title: 'Names',
							names: names
						}
					});
				});
			} else {
				console.log(err);
			}
		});
		
	}	else {
		Names.find({}, function(err, names){
			if(!err){
				res.render('names', {
					locals: {
						title: 'Names',
						names: names
					}
				});
			} else {
				console.log(err);
			}
		});
	}
};

exports.namesDelete = function(req, res){
	console.log('Request handler for deleting name with id '+req.params.id);
	
	Names.findOne({ _id: req.params.id }, function(err, name){
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

exports.noRoute = function(req, res){
	console.log('Request handler for -noRoute- was called');
    res.render('404', {
			locals: {
				title: '404 - Not Found'
			}
		});
};