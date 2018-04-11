const express = require('express');
let app = express();
const port = process.env.PORT || 9999;

app.get('/', (req, res)=>{

    res.send('<h1> Hello, little enemy.</h1>')
});

app.get('/api', (req, res)=>{

    //res.send('<h1> API Page</h1>');

    res.json({name: 'Cosmo'});
});

app.listen(port);

console.log("It's ALIVE!");
