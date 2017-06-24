console.info('id:' + process.pid);
process.on('SIGHUP',() => {
    console.log('get SIGHUP signal');
})

setTimeout(() => {
    console.log('Exiting');
    process.exit(0);
    console.info('一推出id' + process.pid);
}, 10000);

process.kill(process.pid, 'SIGHUP')