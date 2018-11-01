const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const dirCssPath = path.join(__dirname, '../../style.css');

  fs.readFile(dirCssPath, (err, data) => {
    if (err) throw err

    res.writeHead(200)
    res.end(data)

  })
};
