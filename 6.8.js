const fork = require('child_process').fork;
const cpus = require('os').cpus();
console.log('机器cpu内核数量：' + cpus.length);

for(let i = 0; i < cpus.length; i++) {
    console.log('fork a new child_process now ...');
    fork('./6.1.js');
}