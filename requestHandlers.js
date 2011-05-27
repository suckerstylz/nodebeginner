var querystring = require('querystring');

function dashboard(res) {
	console.log('Request handler for -start- was called.');
	res.render('dashboard', {
		locals: {
			title: 'Dashboard'
		}
	});
}

function login(res) {
	console.log('Req handler for -login- was called');
	res.render('login', {
		locals: {
			title: 'Login'
		}
	});
}

function logout(res) {
	console.log('Req handler for -logout- was called');
	res.render('logout');
}

function mite(res) {
	console.log('Req handler for -mite- was called');
	res.render('mite');
}

function upload(res, postData) {
	console.log('Request handler for -upload- was called');
	res.render('upload', {
		locals: {
			title: 'Upload',
			message: 'You have sent: ' + querystring.parse(postData)['text']
		}
	});
}

function names(res, postData) {
	console.log('Request handler for -name- was called');
	res.render('names', {
		locals: {
			title: 'Names',
			names: 'lol'
		}
	});
}

exports.dashboard = dashboard;
exports.login = login;
exports.logout = logout;
exports.mite = mite;
exports.upload = upload;
exports.names = names;