function route(handle, pathname, res, postData) {
	console.log('About to route a request for ' + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](res, postData);
	} else {
		console.log('No request handler found for '+pathname);
		res.render('404', {
			locals: {
				title: '404 Not Found!'
			}
		});
	}
}

exports.route = route;