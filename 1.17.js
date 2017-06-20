console.log('Node.js - readline.weite() Usage');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.write('Delete me ! wait for 3 seconds...');
const timeoutLength = 3 * 1000;
const timeout = setTimeout(()=>{
    rl.write(null, {ctrl: true, name: 'u'})
}, timeoutLength)