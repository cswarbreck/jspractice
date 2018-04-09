const fs = require('fs');

fs.writeFile ('./modules/data.html', '\n New Data! \n', 'UTF-8', (err)=>{

    if(err) return err;

    console.log("This file has been saved");

});

fs.appendFile ('./modules/data.html', '\n Some more lovely data to go with your old data! \n', 'UTF-8', (err)=>{

    if(err) return err;

    console.log("This file has been saved");

});

// \n is a line break

