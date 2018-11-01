const { parse } = require('querystring');

const helper = require('./helper');

const handleAdd = (dirNoteDataPath, req, res) => {
	let parsedBody,
		buffer = '';

	req.on('data', data => {
		buffer += data;
	});
	req.on('end', () => {
		buffer = buffer.toString();
		parsedBody = parse(buffer);
		// give note id based on time of conception
		parsedBody.id = new Date();

		// grab notes from json file that are in an array then push new note to update json file
		const notes = helper.fetchNotes(dirNoteDataPath);
		notes.push(parsedBody);
		helper.updateNotes(dirNoteDataPath, notes);
	});
};

module.exports = handleAdd;
