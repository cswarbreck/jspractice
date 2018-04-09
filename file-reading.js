const fs = require('fs');

fs.readdir('./', (err, content)=>{

    if(err) return err;

    console.log(content);
    
});

fs.readFile('global.html', 'UTF-8', (err, content)=>{

    //encoding (UTF-8) must be included otherwise a buffer class will be output instead

    console.log(content);

});