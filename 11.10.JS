const fs = require('fs');

const ws = fs.createWriteStream('./sss.js');

ws.write('123.45.56.5');
ws.write('writable');
ws.write('file-');

setTimeout(function(){
    ws.end('end\n');
}, 1000)