 console.log('note app');
// //creating variable and exporting 
// module.exports.age=89;

//creating a function to exporting

// module.exports.addNote=()=>{
//     // console.log('note func');
// return 'new node';
// };

// module.exports.add= ( a, b)=>{
//     return a+b;
// }
const fs = require('fs');

const addNote= (title, body)=>{
    let notes = [];
    let note ={
        title,
        body
    };

    try{
        //reading data
        let notesString =  fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }catch(e){

    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        //pusshing the note object
        notes.push(note);

        //writeing the data 
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));

    }
};

//getAll function
const getAll = ()=>{
    console.log('geeting all notes');
};

//read 
const getNote = (title)=>{
    console.log('title:', title);
};

//remove
const removeNote = (title)=>{
    console.log('removing title is:', title);
};
module.exports= {
    addNote,
    getAll,
    getNote,
    removeNote
}