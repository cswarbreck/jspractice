var readline = require('readline');
var util = require('util');
var RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name)=>{
  //Set up the prompt
  RL.setPrompt(`${name} how old are you?` );
  //Set up the prompt in ther terminal
  RL.prompt();
  //Set up the listener
  RL.on('line', (age)=>{

    if (age<18){
      util.log(`Hi ${name.trim()} because you are ${age} years old, you can't use PornHub.`);
      RL.close();
    }else{
      util.log(`Hi ${name.trim()} , those that are ${age} years old may enter. Welcome to PornHub!`);
      RL.close();
    }
  });
});



//Now go to the terminal, cd jspractice, then '$ node iftest.js'
//You should receive a prompt to enter you name and age.
