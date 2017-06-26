const fs = require('fs');
const readable = fs.createReadStream('./send.js');
const writable = fs.createWriteStream('./sss.js');

readable.pipe(writable);