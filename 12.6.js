const http = require('http');

http.get("http://61.4.185.196/apishow/api.php?type=10",(res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log('body:' + chunk);
        console.info();
    })
}).on('error', (e) => {
    console.log('got error: ' + e.message);
    console.info();
})