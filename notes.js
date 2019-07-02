// console.log('Starting notes.js');
const fs = require('fs');

// module.exports.age = 28;

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('note-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('note-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = { title, body };

var duplicateNotes = notes.filter((note) => note.title === title)
if (duplicateNotes.length === 0) {
  notes.push(note);
  saveNotes(notes);
  return note;
}

}

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
}

var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // fetch notes, filter note by title
  var filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes
  saveNotes(filteredNotes);
return notes.length !== filteredNotes.length
}

var logNote = (note) => {
  console.log('-----');
  console.log(`Title : ${ note.title }`);
  console.log(`Body : ${ note.body }`);
};

// module.exports.add = (a, b) => {
//   return a + b;
// }

module.exports = {
  addNote, getAll, getNote, removeNote, logNote
};
