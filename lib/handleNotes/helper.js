const fs = require('fs');

const helper = {};

helper.fetchNotes = (dirPath) => {
	try {
		const notesString = fs.readFileSync(dirPath);
		return JSON.parse(notesString);
	} catch (error) {
		return [];
	}
};

helper.updateNotes = (dirPath, notes) => {
	fs.writeFileSync(dirPath, JSON.stringify(notes));
};

module.exports = helper;