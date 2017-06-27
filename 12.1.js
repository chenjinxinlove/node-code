const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<h3>Node.js --- HTTP</h3>');
    res.end('<p>Create Basic HTTP Server!</p>');
}).listen(6868);