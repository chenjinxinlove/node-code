const cp = require('child_process');
const n = cp.fork('send.js');

n.on('message', (m) => {
    console.log(m);
})

n.send({main: 'sub'});
