const fs = require('fs');

// utility container
const render = {};

// render plain html wrapped in back ticks from js file
render.jsHtml = (dirPath, req, res) => {
	fs.readFile(dirPath, (err, data) => {
		if (err) throw err;

		// remove backticks from html
		data = data.toString().replace(/`/g, '');

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
};

// render 404 error html
render.error = (dirPath, req, res) => {
	fs.readFile(dirPath, (err, data) => {
		if (err) throw err;
	
		res.writeHead(404)
		res.end(data)
	})
}

module.exports = render;