const fs = require('fs');
const file = 'err.text';
const encoding = 'utf8';

fs.readFileSync(file, encoding, (err, data) => {
    if(err) {
        setImmediate(()=>{
            process.stderr.write(`err${err}\n`);
        })
    } else {
        console.log(data);
    }
})