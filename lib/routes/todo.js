const path = require('path');

const render = require('../renderHTML/render');
const handleChange = require('../handleNotes/handleChange');

const dirTodoPath = path.join(__dirname, '../../.data/html/todo.js');
const dirNoteDataPath = path.join(__dirname, '../../.data/notes/notes.json');

module.exports = (req, res) => {
	// handle get request
	if (req.method === 'GET') {
		// render HTML for todo route
		render.todoHtml(dirTodoPath, dirNoteDataPath, req, res);
	}

	if (req.method === 'POST') {
		// handle delete or update based on form button choice
		handleChange(dirTodoPath, dirNoteDataPath, req, res);

		// render HTML for todo route
		render.todoHtml(dirTodoPath, dirNoteDataPath, req, res);
	}
};
