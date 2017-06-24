const spawn = require('child_process').spawn;
const ls_var = spawn('ls', ['-lh', '/var']);
ls_var.stdout.on('data', (data) => {
    console.log('stdout:' + data);
})