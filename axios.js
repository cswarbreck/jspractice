const axios = require('axios');

let username = 'cswarbreck';

axios.get('https://api.github.com/users/' + username).then((res)=>{

    console.log(res.data.public_repos);

}).catch((err)=>{

    console.log(err);

})