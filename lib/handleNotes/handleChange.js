const { parse } = require('querystring');

const helper = require('./helper');

const handleChange = (dirHtmlPath, dirNoteDataPath, req, res) => {
	let buffer = '',
		parsedBody,
		updatedNotes;
	// notes array
	const notes = helper.fetchNotes(dirNoteDataPath);

	req.on('data', data => {
		buffer += data;
	});
	req.on('end', () => {
		buffer = buffer.toString();
		parsedBody = parse(buffer);

		// handle delete request
		if (parsedBody.method === 'delete') {
			// filter out chosen note by id
			updatedNotes = notes.filter(note => note.id !== parsedBody.id);

			// update notes.json file
			helper.updateNotes(dirNoteDataPath, updatedNotes);
		}

		// handle update request
		if (parsedBody.method === 'put') {
      // picking note based on id and updating just the note value
			updatedNotes = notes.map(note => {
				if (note.id === parsedBody.id) {
					note.note = parsedBody.note;
					return note;
				} else {
					return note;
				}
      });
      
      // updating notes.json file
			helper.updateNotes(dirNoteDataPath, updatedNotes);
		}
	});
};

module.exports = handleChange;
