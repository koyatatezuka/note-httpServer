const fs = require('fs');
const path = require('path');

const render = require('../renderHTML/render');

const dirErrorPath = path.join(__dirname, '../../404/error.html');

module.exports = (req, res) => {
  render.error(dirErrorPath, req, res)
}