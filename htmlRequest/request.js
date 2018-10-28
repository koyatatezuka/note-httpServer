const fs = require('fs');

function linkRequest(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });

	if (req.url === '/' && req.method === 'GET') {
		fs.readFile('./html/index.html', null, (err, data) => {
			if (err) {
				res.writeHead(404);
				res.write('File not found!');
			} else {
				res.write(data);
			}

			res.end();
		});
	} else if (req.url === '/todo') {
		fs.readFile('./html/toDo.html', null, (err, data) => {
			if (err) {
				res.writeHead(404);
				res.write('File not found!');
			} else {
				res.write(data);
			}

			res.end();
		});
	} else if (req.url === '/addnote') {
		fs.readFile('./html/addNote.html', null, (err, data) => {
			if (err) {
				res.writeHead(404);
				res.write('File not found!');
			} else {
				res.write(data);
			}

			res.end();
		});
	} else if (req.url === '/style.css') {
		fs.readFile('style.css', function(err, data) {
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.write(data);
			res.end();
		});
	}
}

module.exports = linkRequest;
