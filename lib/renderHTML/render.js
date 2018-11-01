const fs = require('fs');

const helper = require('../handleNotes/helper');

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

// renders todo html and notes based on the number of notes
render.todoHtml = (dirHtmlPath, dirDataPath, req, res) => {
	fs.readFile(dirHtmlPath, (err, data) => {
		if (err) throw err;
		// splits the html into 2 parts in an array by temp div
		const dataArr = data.toString().split('<div id="split"></div>');

		// retrieves notes from notes folder and reverses array so it is last in first out
		const notes = helper.fetchNotes(dirDataPath).reverse();

		// iterates over notes array and injects a note into html as form element
		notes.forEach(note => {
			dataArr[0] += `<form class="notes" action="/todo" method="POST">
			<textarea name="note">${note.note}</textarea><input type="hidden" name="id" value="${note.id}"/><div class="btn-container"><button class="delete-btn" type="submit" name="method" value="delete" value="DELETE">delete</button>
			<button class="update-btn" type="submit" name="method" value="put">update</button></div></form>`;
		});

		// remove backticks from html and joins the array into string
		data = dataArr.join('').replace(/`/g, '');

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
};

// render 404 error html
render.error = (dirPath, req, res) => {
	fs.readFile(dirPath, (err, data) => {
		if (err) throw err;

		res.writeHead(404);
		res.end(data);
	});
};

module.exports = render;
