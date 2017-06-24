const exec = require('child_process').exec;
const child = exec('cat 6.1.js', (error,stdout,stderr) => {
    console.info('cat');
    console.log(stdout);
})