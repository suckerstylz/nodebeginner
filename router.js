function route(server, requestHandlers) {
	
	/**
	 * Routing GET Methods
	 */
	
	server.get('/', requestHandlers.dashboard);
	server.get('/dashboard', requestHandlers.dashboard);
	server.get('/login', requestHandlers.login);
	server.get('/logout', requestHandlers.logout);
	server.get('/mite', requestHandlers.mite);
	server.get('/upload', requestHandlers.upload);
	server.get('/names', requestHandlers.names);

	/**
	 * Routing POST Methods
	 */
	
	server.post('/', requestHandlers.dashboard);
	server.post('/upload', requestHandlers.upload);
	server.post('/names', requestHandlers.names);
	
	/**
	 * Routing PUT Methods
	 */
	
	/**
	 * Routing DEL Methods
	 */
	
	/**
	 * Routing ALL Methods
	 */
	
	server.all('*', requestHandlers.noRoute);
	
}

exports.route = route;