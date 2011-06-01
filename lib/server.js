module.exports.setup = function(options){

	var app = options.app,
			socket = options.app.socket,
			mongoose = options.mongoose,
			io = options.io,
			express = options.express;
		
			Server.paths = options.paths;
		
			global.db = mongoose.createConnection('mongodb://localhost/intradummy');

	app.configure(function(){
		
			app.set('views', options.paths.views);
			app.set('view engine', 'mustache');
			app.set('view options', { layout: false });
			app.register('.mustache', require('stache'));
			app.use(express.bodyParser());
			app.use(express.methodOverride());
			app.use(express.cookieParser());
			app.use(express.session({ secret: '  ' }));
			app.use(express.static(options.paths.root));
			app.use(app.router);
			app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
		
		});
	
		app.listen(8000);
		app.socket = io.listen(app);
		console.log('Server has started at port 8000');

};