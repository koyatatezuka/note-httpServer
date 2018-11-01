const http = require('http');

const server = require('./lib/server');

const PORT = 3000

// instatiating http server
const httpServer = http.createServer((req, res) => {
  server(req,res)
});

// start http server
httpServer.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
});

