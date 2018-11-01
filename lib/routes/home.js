const path = require('path');

const render = require('../renderHTML/render');

const dirHomePath = path.join(__dirname, '../../.data/html/home.js');

module.exports = (req, res) => {
  // render HTML for home route
  render.jsHtml(dirHomePath, req, res);
};
