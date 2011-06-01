var _ = require('underscore')._,
		backbone = require('backbone'),
		application_root = __dirname,
		Server = {},
		express = require('express'),
		path = require('path'),
		application_root = __dirname;

		global.Server = Server;
		Server.root = application_root;
		global.server = express.createServer();

		Server.setup = require('./lib/server.js').setup({
			app : server,
			mongoose : require('mongoose'),
			io : require('socket.io'),
			express : express,
			paths : {
				root: path.join(application_root,'public'),
				views: path.join(application_root,'app','views')
			}
		});

var router = require('./lib/router'),
		requestHandlers = require('./app/controllers/requestHandlers');

router.route(server, requestHandlers);