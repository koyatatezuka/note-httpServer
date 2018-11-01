const fs = require('fs');
const path = require('path');

const render = require('../renderHTML/render');

const dirTodoPath = path.join(__dirname, '../../.data/html/todo.js');

module.exports = (req, res) => {
	// handle get request
	if (req.method === 'GET') {
    // render HTML for todo route
		render.jsHtml(dirTodoPath, req, res);
	}
};
