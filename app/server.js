var express = require('express');

var app = module.exports = express.createServer();
app.configure(function(){
		
		app.set('views', __dirname + '/../views');
		app.set('view engine', 'mustache');
		app.set('view options', { layout: false });
		app.register('.mustache', require('stache'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.cookieParser());
		app.use(express.session({ secret: '  ' }));
		app.use(express.static( __dirname + '/../public' ));
		app.use(this.router);
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
		
	});
	
if(module.parent) {
	app.listen(8000);
	console.log('Server has started at port 8000');
}