const http = require('http');

const options = {
    hostname: '61.4.185.196',
    port: 80,
    path: '/apishow/api.php?type=10',
    method: 'GET'
}

const req = http.request(options, (res) => {
    console.log(res.statusCode);
    console.log(JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(chunk);
    })
})

req.on('error', (e) => {
    console.log(e.message);
})

req.write('data\n');

req.end();