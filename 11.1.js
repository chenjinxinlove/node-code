const fs = require('fs');

const rs = fs.createReadStream('./send.js');

rs.setEncoding('utf8');

rs.on('readable', () =>　{
    console.log('readable event emitted');
    console.info();
})

rs.on('data', (chunk) => {
    console.log(chunk.length);
    console.log(chunk)
})

rs.on('error', () => {
    console.log('error event emitted');
    console.info();
})

rs.on('end', () => {
    console.log('end');
    console.info();
})

rs.on('close', () => {
    console.log('close');
    console.info();
})