process.on('message', (m)=> {
    console.log(m);
})

process.send({sub: 'main'});

