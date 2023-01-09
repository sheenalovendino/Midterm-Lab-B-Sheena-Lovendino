const add = require('./add')
const read = require('./read')

//get user input
const data = process.argv

var note = {}

if(data[2]) {
    note = {
        Employee: data[3],
        Role: data[4],
        Department: data[5],
    }
    var oldNote = read()
    add(note, oldNote)
}
if(data[2] == 'read') {
    ProgressEvent(read())
}