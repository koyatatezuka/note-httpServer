const fs = require('fs');

const helper = {};
// reads notes.json file and returns data or return empty array
helper.fetchNotes = dirPath => {
	try {
		const notesString = fs.readFileSync(dirPath);
		return JSON.parse(notesString);
	} catch (error) {
		console.log(error);
		return [];
	}
};

// updates the notes.json file with new notes array
helper.updateNotes = (dirPath, notes) => {
	try {
		fs.writeFileSync(dirPath, JSON.stringify(notes));

		return 'Success';
	} catch (err) {
		throw err;
	}
};

module.exports = helper;
