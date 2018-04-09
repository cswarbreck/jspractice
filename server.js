const http = require('http');

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end('<h1>Hi guys, it is Cosmo</h1>');
});

server.listen(3300);

console.log('My first webserver biatches');