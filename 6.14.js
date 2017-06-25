const cp = require('child_process');
const child = cp.fork('1.js');

child.on('message', (m) => {
    console.log(m.result)
});

const input = parseInt('10');
child.send({input: 1});
for(let i = 1; i < input; i++) {
    child.send({input: i});
}