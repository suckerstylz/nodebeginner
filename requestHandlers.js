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
	
	if(!req.body) {
		name = 'no name set';
	} else {	
		name = req.body.nameText;
	}
	
	res.render('names', {
		locals: {
			title: 'Names',
			names: name
		}
	});
};

exports.noRoute = function(req, res){
	console.log('Request handler for -noRoute- was called');
    res.render('404', {
			locals: {
				title: '404 - Not Found'
			}
		});
};