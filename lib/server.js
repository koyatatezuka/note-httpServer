const fs = require('fs');

const { home, todo, addNote, css, error } = require('./routes');

// server logic
const server = (req, res) => {
	const { url } = req;

	switch (url) {
		case '/':
      home(req, res);
      break;
		case '/todo':
      todo(req, res);
      break;
		case '/addnote':
      addNote(req, res);
      break;
		case '/style.css':
      css(req, res);
      break;
		default:
      error(req, res);
      break;
  }
  
};

module.exports = server;
