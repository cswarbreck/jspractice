const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const port = process.env.PORT || 9999;

app.use('/css', express.static(__dirname + '/public'));

app.use('/css', (req, res, next)=>{

    console.log('Middleware');

    next();
});

app.get('/', (req, res)=>{

    res.send(`
    

    
    
    `);

    res.send('HOME');
});

app.listen(port);

console.log("Who stole the cookies from the Middleware?");