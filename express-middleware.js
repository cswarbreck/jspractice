const express = require('express');
let app = express();
const port = process.env.PORT || 9999;

app.use('/css', express.static(__dirname + '/public'));

app.use('/css', (req, res, next)=>{

    console.log('Middleware');

    next();
});

app.get('/', (req, res)=>{

    res.send(`
    
    <!DOCTYPE HTML>
    <HTML>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width", user-scalable=no>
        <link rel="stylesheet" href="/css/style.css"/>

        <title>Global</title>
    </head>
    <body>

        <p>There's a starman waiting in the sky</p> 
               <p>He'd like to come and meet us</p>
                <p>But he thinks he'd blow our minds</p>
               <p>There's a starman waiting in the sky…</p>

    </body>

</HTML>
    
    
    `);

    res.send('HOME');
});

app.listen(port);

console.log("Who stole the cookies from the Middleware?");
