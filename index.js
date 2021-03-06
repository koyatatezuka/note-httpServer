const http = require('http');

const server = require('./lib/server');

const PORT =  process.env.PORT || 3000;

// instatiating http server
const httpServer = http.createServer(server);

// start http server
httpServer.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
});

module.exports = httpServer;