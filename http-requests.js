const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, res =>{ //res is response

    res.setEncoding('utf8');

    let body = '';

    res.on('data', data =>{ //listener (listens for data)

        body += data; //concatenation
    });

    res.on('end', ()=>{

        fs.writeFile('data.json', body, 'utf8', (err)=>{

            if(err) return err;

            console.log('Just pulled all the data. \n \n', 'Boom!')
        })
    });
});