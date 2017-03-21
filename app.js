const yargs = require('yargs');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const user = os.userInfo();
const _ = require('lodash');
// const result = _.isString('priyanka');
// console.log(_.uniq(['priyanka', 'priyanka', 1,2,3,1]));
// console.log(result);
// console.log(user);
// fs.appendFile('greetings.txt', 'hello'+' '+ user.username+' ');
//useing exported age
// fs.appendFile('greetings.txt',`hello ${user.username} and your age is ${notes.age}`);

// const res= notes.addNote();
// const add= notes.add(2,3);
// console.log(res);
// console.log(add);

const command = process.argv[2];
// console.log(command);
// console.log(process.argv);
const argv = yargs.argv;

    if(command === 'add'){
        notes.addNote(argv.title, argv.body );
    }
    else if(command === 'list'){
        notes.getAll();
    }
    else if(command === 'read'){
        notes.getNote(argv.title);
    }
    else if(command === 'remove'){
        notes.removeNote(argv.title);
    }

    else
    {
        console.log('command not found');
    }