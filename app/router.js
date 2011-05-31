function router(server, requestHandlers) {
	
	/**
	 * Routing GET Methods
	 */
	
	server.get('/', requestHandlers.dashboard);
	server.get('/dashboard', requestHandlers.dashboard);
	server.get('/login', requestHandlers.login);
	server.get('/logout', requestHandlers.logout);
	server.get('/mite', requestHandlers.mite);
	server.get('/upload', requestHandlers.upload);
	server.get('/users', requestHandlers.users);
	server.get('/users/delete/:id', requestHandlers.usersDelete);
	server.get('/messages/:action/:id?', requestHandlers.messages);
	server.get('/*', requestHandlers.noRoute);
	
	/**
	 * Routing POST Methods
	 */
	
	server.post('/', requestHandlers.dashboard);
	server.post('/login', requestHandlers.login);
	server.post('/logout', requestHandlers.logout);
	server.post('/upload', requestHandlers.upload);
	server.post('/users', requestHandlers.users);
	server.post('/messages/:action/:id?', requestHandlers.messages);
	server.post('/*', requestHandlers.noRoute);
	
	/**
	 * Routing PUT Methods
	 */
	
	/**
	 * Routing DEL Methods
	 */
	
	/**
	 * Routing ALL Methods
	 */
	
	//server.all('/*', requestHandlers.noRoute);
	
}

exports.route = router;