const http = require('http');

http.createServer((req, res) => {
    res.writeHead(301, {
        'Location': 'http://www.baidu.com/'
    })
    res.end('ddd')
}).listen('2011')