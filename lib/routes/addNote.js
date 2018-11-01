const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

const render = require('../renderHTML/render');
const helper = require('../handleNotes/helper');
const handleAdd= require('../handleNotes/handleAdd');

const dirAddNotePath = path.join(__dirname, '../../.data/html/addNote.js');
const dirNoteDataPath = path.join(__dirname, '../../.data/notes/notes.json');

module.exports = (req, res) => {
	// handle get requests
	if (req.method === 'GET') {
		// render HTML for addnote route
		render.jsHtml(dirAddNotePath, req, res);
	}

	// handle post request (add a note)
	if (req.method === 'POST') {
    // handle add to notes post
    handleAdd(dirNoteDataPath, req, res)
    
    // render html
    render.jsHtml(dirAddNotePath, req, res);

	}
};
