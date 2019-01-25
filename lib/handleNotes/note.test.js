const path = require('path');
const expect = require('expect');

const helper = require('./helper');

const dirNoteDataPath = path.join(__dirname, '../../.data/notes/notes.json');

describe('helper functions', () => {
	it('should return an obj', () => {
		let notes = helper.fetchNotes(dirNoteDataPath);

		expect(notes).toBeA('object');
	});

	it('should return Success', () => {
		let updatedNote = helper.updateNotes(dirNoteDataPath, {
			note: 'asdfadfwerwe',
			id: '2019-01-24T01:42:54.593Z'
    });
    
    expect(updatedNote).toBe('Success').toBeA('string')
	});
});
