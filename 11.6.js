const stream = require('stream');

const rs = new stream.Readable;

rs.push('stream');
rs.push('readable');
rs.push('push()');
rs.push('pipe()');
rs.push('\n');
rs.push(null);
rs.pipe(process.stdout);