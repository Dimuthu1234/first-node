console.log('Starting notes.js');
const fs = require('fs');

module.exports.age = 28;

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
  console.log('Getting all notes');
}

var getNote = (title) => {
  console.log('Getting note', title);
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

// module.exports.add = (a, b) => {
//   return a + b;
// }

module.exports = {
  addNote, getAll, getNote, removeNote
};
