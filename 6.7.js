const spawn = require('child_process').spawn;
const free = spawn('free',['-m']);

free.stdout.on('data',(data) => {
    console.log('bz\n' + data);
});

free.stderr.on('data', (data) => {
    console.log('bz\n' + data);
})

free.on('exit', (code, signal) => {
    console.log('zjc' + code);
})