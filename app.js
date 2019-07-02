// sconsole.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// var user = os.userInfo();

// console.log(user);
// fs.appendFile('greeting.txt', 'Hello ' + user.username + '!');
// fs.appendFile('greeting.txt',  `Hello ${user.username}! your age is ${notes.age}`);

// var res = notes.addNote();
// console.log(res);

// console.log('Resulr : ' + notes.add(19, -5));

// console.log(_.isString(true));
// console.log(_.isString('dimuthu'));

// var filteredArray = _.uniq(['sandaruwan', 1, 'dimuthu', 1, 2, 3, 4, 5])
// console.log(filteredArray);
const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOption = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

var argv = yargs
.command('add', 'add a new note', {
  title: titleOption,
  body: bodyOption
})
.command('list', 'list all notes')
.command('read', 'Read a note', {
  title: titleOption
})
.command('remove', 'Removing a note', {
  title: titleOption
})
.help()
.argv;
var commnd = process.argv[2];

// console.log('Process : ', process.argv);
// console.log('Yargs : ' , argv);

if (commnd === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created.');
    notes.logNote(note);
  }else{
    console.log('this title is already exists.');
  }
}else if (commnd === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing ${ allNotes.length } note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
}else if (commnd === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note readed.');
    notes.logNote(note);
  }else{
    console.log('this note not found');
  }
  notes.getNote(argv.title);
}else if (commnd === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'note was removed':'note not found'
  console.log(message);
}else {
  console.log('commnd not recognize');
}
// console.log(commnd);
